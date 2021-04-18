import colors from './colors';
import shadows from './shadows';
import {Theme} from './types';

const theme = (mode): Theme => ({colors: colors(mode), shadows: shadows(mode)});

export default theme;
