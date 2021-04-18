import React, {memo} from 'react';
import {human, systemWeights} from 'react-native-typography';
import _ from 'lodash';
import {Text, TextProps} from 'react-native';
import {useTheme} from 'styled-components';
import {Theme} from '../../../theme/types';

type FontSize = keyof typeof human;

type FontWeight = keyof typeof systemWeights;

type Type = keyof Theme['colors']['text'];

export interface LabelProps extends TextProps {
  children;
  size?: FontSize;
  type?: Type;
  weight?: FontWeight;
  color?: string;
}

const Label = memo((props: LabelProps) => {
  const {children, style, ..._props} = props;

  const {colors} = useTheme() as Theme;
  return (
    <Text
      {..._props}
      style={[
        human[props.size] || {},
        systemWeights[props.weight] || {},
        props.color && {color: props.color},
        props.type && {color: colors.text[props.type]},
        props.style,
      ]}>
      {children}
    </Text>
  );
});

export default Label;
