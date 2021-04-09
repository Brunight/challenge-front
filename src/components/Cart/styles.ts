import styled, { css } from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: none;
  background: var(--cart-background);
  &:before {
    content: "";
    position: absolute;
    display: block;
    top: -20px;
    right: 27px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid var(--cart-item-background);
  }

  ${(props) => props.isOpen && css`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 91px;
    right: 32px;
    width: 320px;
    height: 460px;
    box-shadow: 0px 2px 4.95px 0.05px rgba(0, 0, 0, 0.14);
    
    @media (max-width: 1270px) {
      top: 73px;
    }

    @media (max-width: 1120px) {
      top: 84px;
      right: 10px;
      min-width: 300px;
      
      &:before {
        right: 7px;
      }
    }
  `}

  span {
    text-align: center;
    font-size: 1.1rem;
    line-height: 4rem;
  }

  button {
    height: 4rem;
    color: #fff;
    background: var(--green);
    border: 0;
    font-size: 1.1rem;
    font-weight: 700;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const CartItem = styled.div`
  display: flex;
  height: 7rem;
  padding: 1rem 1rem 1rem;
  margin-right: 10px;

  background: var(--cart-item-background);

  img {
    height: 100%;
    width: auto;
  }

  & + div {
    margin-top: 1px;
  }

  transition: filter 0.1s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 0.7rem;

  span {
    display: inline-block;
    font-size: 13px;
    line-height: 16px;
    text-align: left;
  }
  
  div {
    display: flex;
    justify-content: space-between;
    margin-right: 1rem;

    span {
      font-size: 14px;
      font-weight: 500;
    }
    strong {
      color: var(--green);
      font-weight: 600;
    }
  }
`;
