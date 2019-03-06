import YouTheme from './themes';

export type ThemeType = typeof YouTheme;

const bindThemeToGlobal = (globalName: any) => {
  window[globalName] = YouTheme;
};

bindThemeToGlobal('YouTheme');
