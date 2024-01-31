import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  right: 50px;
  bottom: 50px;

  cursor: pointer;
  border: 2px solid ${(props) => props.theme.dark};
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.light};
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 12px;
  transition: all 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.dark};
  }
`;
