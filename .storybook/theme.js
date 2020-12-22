import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#822963',
  colorSecondary: '#4D143D',

  // UI
  appBg: '#F2E7F0',
  appContentBg: '#F2E7F0',
  appBorderColor: '#E2B7D8',
  appBorderRadius: "1rem",

  // Typography
  fontBase: '"Open-sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: '#0061FF',
  barBg: '#E2B7D8',

  // Form colors
  inputBg: '#F2E7F0',
  inputBorder: '#0061FF',
  inputTextColor: 'black',
  inputBorderRadius: "1rem",

  brandTitle: 'Açai Framework',
  brandUrl: 'https://github.com/AcaiFramework',
  brandImage: 'https://raw.githubusercontent.com/AcaiFramework/dev-doc/master/img/logo.png?token=AE5V27X57RG5EZLXGMGKUA274FFSO',
});