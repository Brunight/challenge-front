import styled from 'styled-components';

export const Container = styled.header`
  max-width: 100vw;
  margin: 0 auto;

  padding: 1rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 12.35px 0.65px rgba(0, 0, 0, 0.13);
  
  svg.dropdown {
    display: none;
  }

  @media (max-width: 1120px) {
    padding: 1rem 1rem 0rem;
    
    svg.dropdown {
      display: block;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  div {
    svg {
      cursor: pointer;
      margin-right: 2rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(2);
      }
    }
  }
  
  @media (max-width: 1270px) {
    img {
      width: 220px;
    }
  }

  @media (max-width: 1120px) {
    img {
      width: 200px;
    }

    div {
      svg {
        margin-right: 0.5rem;
      }
    }
  }
`;
