import YouTheme from './themes';

export type ThemeType = typeof YouTheme;

const bindThemeToGlobal = globalName => {
  window[globalName] = YouTheme;
};

bindThemeToGlobal('YouTheme');
