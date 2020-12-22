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
  brandImage: 'https://camo.githubusercontent.com/90b8d17ae38b92a4d444e801d946ab9eaed0f4626ad5cbe265ffccc2c4a187c2/68747470733a2f2f6170692e61706f736f6674776f726b732e636f6d2f73746f726167652f696d6167652f6568526446497a36747169455258494431534958416575306d6d54424b4c6469784958734e6a39732e706e67',
});