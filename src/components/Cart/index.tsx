import React, { useEffect, useState } from 'react';
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
}

const Cart: React.FC<CartProps> = ({ isOpen }) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setCart(data.cart.item));
  }, []);

  
  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      sumTotal += product.quantity * product.bestPrice / 100;

      return sumTotal;
    }, 0)
  );
    

  return (
    <Container isOpen={isOpen} >
      <CartScrollbar>
        {cart.map((product => (
          <CartItem key={product.productId}>
            <img src={product.image} alt={product.name}/>
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
      <button type="button">FINALIZAR COMPRA</button>
    </Container>
  );
}

export default Cart;