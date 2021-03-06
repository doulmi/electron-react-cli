import {
  cyan300,
  cyan700,
  grey600,
  pinkA100, pinkA200, pinkA400,
  fullWhite,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing: spacing,
  // fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#121314',
    primary2Color: cyan700,
    primary3Color: grey600,
    accent1Color: '#FF5500',
    accent2Color: pinkA400,
    accent3Color: pinkA100,
    textColor: fade(fullWhite, 0.7),
    secondaryTextColor: fade(fullWhite, 0.8),
    alternateTextColor: '#303030',
    canvasColor: '#B8B8B9',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  },

  appBar: {
    height: 50,
    borderColor: '#FF5500',
  },

  drawer: {
    width: 200,
    background: '#222326',
  },

  svgIcon: {
    color: '#B8B8B9',
    hoverColor: 'white'
  }
};
