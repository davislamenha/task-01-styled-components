import * as S from './styles';
import logo from '../../assets/demon_slayer_logo.png';
import { Container } from '../../styles/global';

const Header = () => {
  return (
    <S.HeaderContainer>
      <Container>
        <img
          src={logo}
          alt="Identidade visual do anime Demon Slayer"
          width={494}
          height={468}
        />
        <S.Navigation>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#history">História</a>
            </li>
            <li>
              <a href="#character">Personagens</a>
            </li>
            <li>
              <a href="#arc">Arcos</a>
            </li>
          </ul>
        </S.Navigation>
      </Container>
    </S.HeaderContainer>
  );
};

export default Header;
