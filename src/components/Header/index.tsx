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

  const handleCartClick = useCallback((e) => {
    e.preventDefault();
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
          <button
            type="button"
            onClick={handleSearchClick}
            className="icon"
          >
            <MdSearch size={32} />
          </button>
          <button
            type="button"
            onClick={handleProfileClick}
            className="icon"
          >
            <MdPerson size={32} />
          </button>
          <button
            type="button"
            onClick={handleCartClick}
            className="icon"
          >
            <MdShoppingCart size={32} />
          </button>
        </div>
        
        {isCartOpen && <Cart close={() => setIsCartOpen(false)} />}
      </Content>


      {isMobile && !isCollapsed && <Menu isMobile />}
      <button
        type="button"
        onClick={handleCollapseClick}
        className="icon dropdown"
      >
        {isCollapsed
          ? <MdArrowDropDown size={32} />
          : <MdArrowDropUp size={32} />
        }
      </button>
    </Container>
  );
}

export default Header;