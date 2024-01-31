import * as S from './styles';
import hunters from '../../assets/demon_hunters.png';
import onis from '../../assets/onis.jpeg';
import { ThemesType } from '../../App';

interface HeroProps {
  currentTheme: ThemesType;
}

const Hero = ({ currentTheme }: HeroProps) => {
  const heroImgSrc = currentTheme === 'defaultTheme' ? hunters : onis;

  const heroImgAlt =
    currentTheme === 'defaultTheme'
      ? 'Os nove Hashiras, caçadores de demônio, do anime Demon Slayer'
      : 'Alguns dos Onis, demônios, do anime Demon Slayer';

  const heroTitle =
    currentTheme === 'defaultTheme'
      ? 'Demon Slayer: os caçadores de demônios'
      : 'Demon Slayer: os demônios';

  return (
    <S.HeroContainer>
      <img src={heroImgSrc} alt={heroImgAlt} />
      <S.TitleContainer>
        <h1>{heroTitle}</h1>
      </S.TitleContainer>
    </S.HeroContainer>
  );
};

export default Hero;
