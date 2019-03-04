import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { ThemeType } from 'ui/styles';

declare const YouNavigator: NavigationScreenProp<NavigationState>;

declare global {
  interface Window {
    [key: string]: any;
  }
  const YouTheme: ThemeType;
}
