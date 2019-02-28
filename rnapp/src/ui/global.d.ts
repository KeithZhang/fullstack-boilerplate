import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { ThemeType } from './styles';

declare global {
  const YouNavigator: NavigationScreenProp<NavigationState>;
  const YouTheme: ThemeType;
}
