import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {Theme} from '../../../theme/types';

interface Props {
  children?;
  progress: number;
  color: string;
  style?: StyleProp<ViewStyle>;
}

const Bar = styled.View<{progress: number; background: string; theme: Theme}>`
  background: ${props => props.background || 'transparent'};
  max-width: 100%;
  height: 100%;
  border-radius: 5;
  align-items: flex-start;
  justify-content: center;
  width: ${props => props.progress || 0}%;
`;

const BarContainer = styled.View<{theme: Theme}>`
  background: transparent;
  border-radius: 5;
  height: 30;
`;

function ProgressIndicator(props: Props) {
  console.log(props);

  return (
    <BarContainer style={props.style}>
      <Bar progress={props.progress} background={props.color}>
        {props.children}
      </Bar>
    </BarContainer>
  );
}

export default ProgressIndicator;
