import React, { useCallback, useEffect, useState, useRef } from 'react';
import addDots from '../../utils/addDots';
import { formatPrice } from '../../utils/format';
import CartScrollbar from '../CartScrollbar';

import { Container, CartItem, ItemInfo } from './styles';

interface Product {
  productId: number;
  name: string;
  salesChannel: string;
  available: boolean;
  bestPriceFormated: string;
  bestPrice: number;
  quantity: number;
  image: string;
}

interface CartProps {
  isOpen: boolean;
  close: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, close }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setCart(data.cart.item));
  }, []);

  
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (isOpen) {
          close();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef, isOpen, close]);
  
  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      sumTotal += product.quantity * product.bestPrice / 100;

      return sumTotal;
    }, 0)
  );
  
  const handleCheckout = useCallback(() => {
    console.log('Checkout button clicked!');
  }, []);

  return (
    <Container isOpen={isOpen} ref={wrapperRef} >
      <CartScrollbar>
        {cart.map((product => (
          <CartItem key={product.productId}>
            <img src={product.image.substring(1)} alt={product.name}/>
            <ItemInfo>
              <span>{addDots(product.name, 40)}</span>
              <div>
                <span>Qtd.: {product.quantity}</span>
                <strong>{product.bestPriceFormated}</strong>
              </div>
            </ItemInfo>
          </CartItem>
        )))}
      </CartScrollbar>
      <span>Total do pedido: <strong>{total}</strong></span>
      <button type="button" onClick={handleCheckout}>FINALIZAR COMPRA</button>
    </Container>
  );
}

export default Cart;