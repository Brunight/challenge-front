import styled, { css } from 'styled-components';

interface ContainerProps {
  isMobile: boolean;
}

export const Container = styled.nav<ContainerProps>`
  ul {
    list-style-type: none;
  }

  li {
    /* display: inline-block; */
    font-size: 1rem;
    font-weight: 500;
    line-height: 2rem;
    margin: 0 1rem;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(2);
    }

    ${(props) => !props.isMobile && css`
      display: inline-block;
    `}
  }

  @media (max-width: 1270px) {
    li {
      margin: 0 0.6rem;
    }
  }
`;