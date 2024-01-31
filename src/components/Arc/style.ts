import styled from 'styled-components';
import { Container } from '../../styles/global';

export const Arc = styled.section`
  background-color: ${(props) => props.theme.primary_light};
  padding: 4rem 0;

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2rem;
  }

  ${Container} {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    img {
      object-fit: cover;
      width: min(100%, 700px);
      max-width: 100%;
      border-radius: 12px;
      border: 6px solid ${(props) => props.theme.dark};
    }
  }

  @media (max-width: 1100px) {
    h2 {
      font-size: 1.5rem;
    }

    img {
      margin: 0 auto;
    }
  }
`;

export const ArcContent = styled.div`
  flex: 1;
  flex-basis: 20rem;
  padding: 1rem;

  h3 {
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-bottom: 12px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 1100px) {
    padding: 0;
    text-align: center;

    h3 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.875rem;
    }
  }
`;
