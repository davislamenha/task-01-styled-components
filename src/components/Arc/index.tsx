import * as S from './style';
import { Container } from '../../styles/global';
import { ThemesType } from '../../App';
import hashira from '../../assets/mitsuri.webp';
import oni from '../../assets/douma.webp';

interface ArcProps {
  currentTheme: ThemesType;
}

const Arc = ({ currentTheme }: ArcProps) => {
  const ArcImgSrc = currentTheme === 'defaultTheme' ? hashira : oni;

  const ArcImgWidth = currentTheme === 'defaultTheme' ? 522 : 555;

  const ArcImgAlt =
    currentTheme === 'defaultTheme'
      ? 'Os nove Hashiras, caçadores de demônio, do anime Demon Slayer'
      : 'Douma, lua superior 2, do anime demon slayer';

  const ArcTitle = currentTheme === 'defaultTheme' ? 'Os Hashiras' : 'Os Onis';

  const descHashiras = `Os Hashiras são peças-chave em cada arco de "Demon Slayer". Em "Arco da Seleção", eles avaliam novos recrutas. No "Arco do Trem Infinito", suas habilidades são cruciais para enfrentar uma ameaça demoníaca crescente. Nos "Arcos da Mansão da Borboleta" e "Entre as Luzes", os Hashiras desempenham papéis decisivos em confrontos intensos. Sua presença é constante, oferecendo orientação e poderosas habilidades em momentos críticos, tornando-os essenciais para o desenvolvimento da trama.
  `;

  const descOnis = `
    Os Onis, também conhecidos como Luas Superiores, são figuras-chave em cada arco de "Demon Slayer". No "Arco da Seleção", sua influência é evidente, desencadeando desafios significativos para os Caçadores de Demônios. No "Arco do Trem Infinito", um Oni específico apresenta uma ameaça iminente. Nos "Arcos da Mansão da Borboleta" e "Entre as Luzes", as habilidades distintas dos Onis intensificam os confrontos. Sua presença constante representa uma ameaça contínua, testando as habilidades e a tenacidade dos protagonistas ao longo da narrativa.
     `;

  const ArcDescription =
    currentTheme === 'defaultTheme' ? descHashiras : descOnis;

  return (
    <S.Arc>
      <h2>Os personagens em cada arco</h2>
      <Container>
        <img src={ArcImgSrc} alt={ArcImgAlt} width={ArcImgWidth} height={300} />
        <S.ArcContent>
          <h3>{ArcTitle}</h3>
          <p>{ArcDescription}</p>
        </S.ArcContent>
      </Container>
    </S.Arc>
  );
};

export default Arc;
