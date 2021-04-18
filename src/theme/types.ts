import shadows from './shadows';

interface Colors {
  gray: {
    gray1;
    gray2;
    gray3;
    gray4;
    gray5;
    gray6;
  };
  background: {
    primary;
    secondary;
    tertiary;
  };
  text: {
    primary;
    secondary;
    tertiary;
    quaternary;
    placeholder;
    link;
  };
  seperator: {
    primary;
    opaque;
  };
  generic: {
    blue;
    teal;
    yellow;
    purple;
    green;
    red;
    black;
    white;
  };
}

interface Shadows {
  card;
}

export interface Theme {
  colors: Colors;
  shadows: Shadows;
}
