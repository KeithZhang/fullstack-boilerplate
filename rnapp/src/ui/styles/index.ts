import YouTheme from './themes';

export type ThemeType = typeof YouTheme;

const bindThemeToGlobal = globalName => {
  (global || window)[globalName] = YouTheme;
};

bindThemeToGlobal('YouTheme');
