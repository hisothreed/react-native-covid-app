import {Theme} from './types';

function shadows(mode): Theme['shadows'] {
  return {
    card: {
      elevation: 1,
      'shadow-offset': {height: 0, width: 0},
      'shadow-opacity': 0.09,
      'shadow-radius': 10,
      'shadow-color': 'black',
    },
  };
}

export default shadows;
