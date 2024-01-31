import styled from 'styled-components';
import { Container } from '../../styles/global';

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.primary_dark};
  padding: 2rem 0;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align:center;
  }

  p {
    color: ${(props) => props.theme.dark};
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }

    @media (max-width: 767px) {
      flex-direction: column;
      justify-content: center;
    }
  }
`;