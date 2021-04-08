import styled from 'styled-components';

export const Container = styled.header`
  max-width: 100vw;
  margin: 0 auto;

  padding: 2rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow:         0px 0px 12.35px 0.65px rgba(0, 0, 0, 0.13);
  -moz-box-shadow:    0px 0px 12.35px 0.65px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 0px 0px 12.35px 0.65px rgba(0, 0, 0, 0.13);

  img {
    width: 220px;
  }
`;

export const MenuLinks = styled.div`
  span {
    font-size: 0.90rem;
    margin: 0 1rem;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(2);
    }
  }
`;

export const MenuIcons = styled.div`
  svg {
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(2);
    }
  }

  svg + svg {
    margin-left: 3rem;
  }
`;
