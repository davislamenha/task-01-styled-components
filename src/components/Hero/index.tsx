import * as S from './styles';
import hunters from '../../assets/demon_hunters.webp';
import onis from '../../assets/onis.webp';
import { ThemesType } from '../../App';

interface HeroProps {
  currentTheme: ThemesType;
}

const Hero = ({ currentTheme }: HeroProps) => {
  const heroImgSrc = currentTheme === 'defaultTheme' ? hunters : onis;

  const heroImgWidth = currentTheme === 'defaultTheme' ? 1817 : 2560;

  const heroImgHeigth = currentTheme === 'defaultTheme' ? 902 : 1440;

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
      <img
        src={heroImgSrc}
        alt={heroImgAlt}
        width={heroImgWidth}
        height={heroImgHeigth}
      />
      <S.TitleContainer>
        <h1>{heroTitle}</h1>
      </S.TitleContainer>
    </S.HeroContainer>
  );
};

export default Hero;
