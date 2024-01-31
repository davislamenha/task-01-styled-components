import 'styled-components';
import { defaultTheme } from '../styles/themes/default';
import { oniTheme } from '../styles/themes/oniTheme';

type DefaultThemeType = typeof defaultTheme;
type OniThemeType = typeof oniTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeType {}
  export interface DefaultTheme extends OniThemeType {}
}
