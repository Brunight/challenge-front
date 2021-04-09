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

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const isMobile = useMemo(() => {
    return width < 1120;
  }, [width]);

  const handleCollapseClick = useCallback(() => {
    setIsCollapsed((oldValue) => !oldValue);
  }, []);

  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="E-Plus"/>

        {!isMobile && <Menu />}

        <div>
          <MdSearch size={32} />
          <MdPerson size={32} />
          <MdShoppingCart size={32} />
        </div>
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