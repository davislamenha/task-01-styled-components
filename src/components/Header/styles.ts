import styled from 'styled-components';
import { Container } from '../../styles/global';

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.primary_dark};
  padding: 2rem 0;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    img {
      object-fit: contain;
      height: 80px;
      width: 80px;
    }

    @media (max-width: 767px) {
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    gap: 12px;

    li {
      transition: all 0.3s;

      a {
        color: ${(props) => props.theme.dark};
        font-weight: bold;
        text-transform: uppercase;
      }

      &:hover {
        transform: scale(1.05);
        letter-spacing: 0.5px;
      }
    }
  }
`;
