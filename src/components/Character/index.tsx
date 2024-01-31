import * as S from './styles';
import { Container } from '../../styles/global';
import { ThemesType } from '../../App';
import hashiras from '../../assets/cacadores.webp';
import onis from '../../assets/luassuperiores.webp';

interface CharacterProps {
  currentTheme: ThemesType;
}

const Character = ({ currentTheme }: CharacterProps) => {
  const CharacterImgSrc = currentTheme === 'defaultTheme' ? hashiras : onis;

  const CharacterImgWidth = currentTheme === 'defaultTheme' ? 500 : 569;

  const CharacterImgHeight = currentTheme === 'defaultTheme' ? 281 : 320;

  const CharacterImgAlt =
    currentTheme === 'defaultTheme'
      ? 'Os nove Hashiras, caçadores de demônio, do anime Demon Slayer'
      : 'Algumas luas superiores, onis com mais destaques na história do anime Demon Slayer';

  const CharacterTitle =
    currentTheme === 'defaultTheme' ? 'Os Hashiras' : 'Os Onis';

  const descHashiras = `Os hashiras são um grupo com nove personagens, cada um com seu poder distinto, desde poderes elementais como água e fogo, como poderes mais diferenciados como o amor e serpentes. Cada um é um mestre habilidoso, especializado em enfrentar diferentes tipos de demônios. O Hashira da Água, Giyu Tomioka, utiliza a Respiração da Água, enquanto o Hashira do Fogo, Kyojuro Rengoku, emprega a Respiração da Chama. Tengen Uzui, o Hashira Sonolento, é habilidoso na Respiração do Trovão, e Shinobu Kocho, a Hashira dos Insetos, utiliza a Respiração dos Insetos. O Hashira da Rocha, Muichiro Tokito, incorpora a Respiração da Névoa, e Gyomei Himejima, o Hashira da Terra, utiliza a Respiração da Besta. Sanemi Shinazugawa, o Hashira do Vento, emprega a Respiração do Vento, enquanto Mitsuri Kanroji, a Hashira do Amor, utiliza a Respiração do Amor. Por fim, Kanao Tsuyuri, a Hashira da Flor, domina a Respiração da Flor. Juntos, esses nove Hashiras formam uma força formidável, unindo suas habilidades únicas para proteger a humanidade dos demônios que assolam o mundo. 
  `;

  const descOnis = `No universo de demon slayer há vários onis, porém existe uma classe de oni com muito mais destaque: as luas superiores. Também conhecidas como Doze Kizuki, representam a elite dos demônios em "Demon Slayer", servindo como comandantes sob o líder do universo demoníaco, Muzan Kibutsuji. Cada Lua Superior possui um número designado e uma posição hierárquica. Entre eles, destaca-se Enmu, a Lua Inferior Um, que possui a capacidade de manipular sonhos. Akaza, a Lua Inferior Três, é um mestre da Respiração da Fera, enquanto Daki, a Lua Inferior Seis, é uma demônio sedutora. Gyokko, a Lua Inferior Quatro, controla as marionetes com habilidade, e Nakime, a Lua Inferior Cinco, tem o poder de manipular espaço. Kaigaku, a Lua Inferior Dois, e Hantengu, a Lua Inferior Sete, também são membros proeminentes, com habilidades únicas e perigosas. O restante das Luas Superiores contribui para a variedade formidável de habilidades, criando desafios intransponíveis para os Caçadores de Demônios.
     `;

  const CharacterDescription =
    currentTheme === 'defaultTheme' ? descHashiras : descOnis;

  return (
    <S.Character>
      <h2>Conheça os personagens</h2>
      <Container>
        <img
          src={CharacterImgSrc}
          alt={CharacterImgAlt}
          width={CharacterImgWidth}
          height={CharacterImgHeight}
        />
        <S.CharacterContent>
          <h3>{CharacterTitle}</h3>
          <p>{CharacterDescription}</p>
        </S.CharacterContent>
      </Container>
    </S.Character>
  );
};

export default Character;
