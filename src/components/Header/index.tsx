import React, { useCallback, useMemo, useState } from 'react';

import { 
  MdShoppingCart,
  MdSearch,
  MdPerson,
  MdArrowDropDown,
  MdArrowDropUp
} from 'react-icons/md';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import Menu from '../Menu';
import imgLogo from '../../assets/agencia-eplus-n-logo.png'

import { Container, Content } from './styles';
import Cart from '../Cart';

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isMobile = useMemo(() => {
    return width < 1120;
  }, [width]);

  const handleCollapseClick = useCallback(() => {
    setIsCollapsed((oldValue) => !oldValue);
    setIsCartOpen(false);
  }, []);

  const handleCartClick = useCallback(() => {
    setIsCartOpen((oldValue) => !oldValue);
    setIsCollapsed(true);
  }, []);
  
  const handleSearchClick = useCallback(() => {
    console.log('Search icon clicked!');
  }, []);
  
  const handleProfileClick = useCallback(() => {
    console.log('Profile icon clicked!');
  }, []);

  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="E-Plus"/>

        {!isMobile && <Menu />}

        <div>
          <MdSearch size={32} onClick={handleSearchClick} />
          <MdPerson size={32} onClick={handleProfileClick} />
          <MdShoppingCart size={32} onClick={handleCartClick} />
        </div>
        
        <Cart isOpen={isCartOpen} />
      </Content>


      {isMobile && !isCollapsed && <Menu isMobile />}
      {isCollapsed
        ? <MdArrowDropDown
          className="dropdown"
          size={32}
          onClick={handleCollapseClick}
        />
        : <MdArrowDropUp
          className="dropdown"
          size={32}
          onClick={handleCollapseClick}
        />
      }
    </Container>
  );
}

export default Header;