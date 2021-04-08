import React from 'react';

import { MdShoppingCart, MdSearch, MdPerson } from 'react-icons/md';

import imgLogo from '../../assets/agencia-eplus-n-logo.png'

import { Container, MenuLinks, MenuIcons } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={imgLogo} alt="E-Plus"/>
      <MenuLinks>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
      </MenuLinks>
      <MenuIcons>
        <MdSearch size={32} />
        <MdPerson size={32} />
        <MdShoppingCart size={32} />
      </MenuIcons>
    </Container>
  );
}

export default Header;