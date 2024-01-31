import * as S from './styles';
import { ThemesType } from '../../App';
import { Container } from '../../styles/global';
import muzan from '../../assets/muzan-kibutsuj.webp';
import hashiras from '../../assets/hashiras.webp';

interface HistoryProps {
  currentTheme: ThemesType;
}

const History = ({ currentTheme }: HistoryProps) => {
  const historyImgSrc = currentTheme === 'defaultTheme' ? hashiras : muzan;

  const historyImgWidth = currentTheme === 'defaultTheme' ? 1200 : 1024;

  const historyImgHeight = currentTheme === 'defaultTheme' ? 628 : 576;

  const historyImgAlt =
    currentTheme === 'defaultTheme'
      ? 'Os nove Hashiras, caçadores de demônio, do anime Demon Slayer'
      : 'Alguns dos Onis, demônios, do anime Demon Slayer';

  const historyTitle =
    currentTheme === 'defaultTheme' ? 'Os Hashiras' : 'Os Onis';

  const descHashiras = `A história dos Hashiras é uma narrativa rica e diversificada, abordando as vidas individuais dos nove pilares do Corpo de Caçadores de Demônios. Cada Hashira passou por um treinamento rigoroso e enfrentou desafios únicos para dominar suas respectivas técnicas de respiração e se tornar mestre em sua arte. Essa seção destaca os momentos-chave em que cada Hashira enfrentou seus medos, superou suas limitações e alcançou o status elevado de Hashira.
`;

  const descOnis = `A história dos oni e dos demônios oferece uma visão sombria e fascinante do lado antagonista do universo de "Demon Slayer". Explorando as origens dos demônios, a narrativa revela os eventos que levam humanos a se transformarem nessas criaturas sedentas de sangue devido à maldição demoníaca. A seção destaca as hierarquias dentro da sociedade demoníaca, desde demônios menos poderosos até as temíveis Doze Luas Superiores, cada um com suas próprias motivações e objetivos.
   `;

  const historyDescription =
    currentTheme === 'defaultTheme' ? descHashiras : descOnis;

  return (
    <S.History>
      <h2>Conheça a história</h2>
      <Container>
        <img
          src={historyImgSrc}
          alt={historyImgAlt}
          width={historyImgWidth}
          height={historyImgHeight}
        />
        <S.HistoryContent>
          <h3>{historyTitle}</h3>
          <p>{historyDescription}</p>
        </S.HistoryContent>
      </Container>
    </S.History>
  );
};

export default History;
