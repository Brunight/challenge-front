import React, { useCallback, useEffect, useState, useRef } from 'react';
import addDots from '../../utils/addDots';
import { formatPrice } from '../../utils/format';
import CartScrollbar from '../CartScrollbar';
import { findDOMNode } from 'react-dom';

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
  close: () => void;
}

const Cart: React.FC<CartProps> = ({ close }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setCart(data.cart.item));
  }, []);

  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const cartNode = findDOMNode(wrapperRef.current);
      if (!cartNode || !cartNode.contains(event.target as Node)) {
        close();
        event.stopPropagation();
      }
    }

    document.addEventListener("click", handleClickOutside, true);
    return () => document.removeEventListener(
      "click", 
      handleClickOutside, 
      true
    );
  }, [wrapperRef, close]);
  
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
    <Container ref={wrapperRef} >
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