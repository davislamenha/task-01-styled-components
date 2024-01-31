import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
    max-height: 700px;
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.primary_light};

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
  }

  @media (max-width: 767px) {
    margin-top: -10px;
    position: initial;
    background-color: ${(props) => props.theme.dark};
    padding: 1rem 0;
    color: ${(props) => props.theme.light};
    h1 {
      font-size: 1.5rem;
    }
  }
`;
