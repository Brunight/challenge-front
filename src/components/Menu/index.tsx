import React from 'react';

import { Container } from './styles';

interface MenuProps {
  isMobile?: boolean;
}

const Menu: React.FC<MenuProps> = ({ isMobile }) => {
  return (
    <Container isMobile={!!isMobile}>
      <ul>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
    </Container>
  )
}

export default Menu;