import {iOSColors} from 'react-native-typography';
import {Theme} from './types';

function colors(mode): Theme['colors'] {
  return {
    gray: {
      gray1: {dark: 'rgb(142,142,147)', light: 'rgb(142, 142, 147)'}[mode],
      gray2: {dark: 'rgb(99,99,102)', light: 'rgb(174,174,178)'}[mode],
      gray3: {dark: 'rgb(72,72,74)', light: 'rgb(199,199,204)'}[mode],
      gray4: {dark: 'rgb(58,58,60)', light: 'rgb(209,209,214)'}[mode],
      gray5: {dark: 'rgb(44,44,46)', light: 'rgb(229,229,234)'}[mode],
      gray6: {dark: 'rgb(28,28,30)', light: 'rgb(242,242,247)'}[mode],
    },
    background: {
      primary: {dark: '#222222', light: 'rgb(242,242,247)'}[mode],
      secondary: {dark: '#1C1C1E', light: 'rgb(255,255,255)'}[mode],
      tertiary: {dark: '#2C2C2E', light: 'rgb(242,242,247)'}[mode],
    },
    text: {
      primary: {dark: 'white', light: 'black'}[mode],
      secondary: {dark: 'rgb(142,142,147)', light: 'rgb(142, 142, 147)'}[mode],
      tertiary: {dark: 'rgb(99,99,102)', light: 'rgb(174,174,178)'}[mode],
      quaternary: {dark: 'rgb(72,72,74)', light: 'rgb(199,199,204)'}[mode],
      placeholder: {dark: 'rgb(99,99,102)', light: 'rgb(174,174,178)'}[mode],
      link: {dark: '#0052CC', light: '#0052CC'}[mode],
    },
    seperator: {
      primary: {dark: 'rgb(44,44,46)', light: 'rgb(229,229,234)'}[mode],
      opaque: {dark: 'rgb(28,28,30)', light: 'rgb(242,242,247)'}[mode],
    },
    generic: {
      blue: iOSColors.blue,
      teal: iOSColors.tealBlue,
      yellow: '#FFAB00',
      purple: '#6554C0',
      green: iOSColors.green,
      red: iOSColors.red,
      black: 'black',
      white: 'white',
    },
  };
}

export default colors;
