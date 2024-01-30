import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';

import { defaultTheme } from './styles/themes/default';
import { oniTheme } from './styles/themes/oniTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import SwitchThemeButton from './components/SwitchThemeButton';

export type ThemesType = 'defaultTheme' | 'oniTheme';

function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemesType>('defaultTheme');

  function handleSwitchTheme() {
    currentTheme === 'defaultTheme'
      ? setCurrentTheme('oniTheme')
      : setCurrentTheme('defaultTheme');
  }

  return (
    <>
      <ThemeProvider
        theme={currentTheme === 'defaultTheme' ? defaultTheme : oniTheme}
      >
        <SwitchThemeButton onClick={handleSwitchTheme} />
        <Header />
        <Hero currentTheme={currentTheme} />
        <footer>FOOTER</footer>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
