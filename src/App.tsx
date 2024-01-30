import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <header>HEADER</header>
        <h1>Demon Slayer</h1>
        <footer>FOOTER</footer>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
