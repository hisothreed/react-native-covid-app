import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, ViewProps} from 'react-native';
import {Theme} from '../../../theme/types';
import Container from '../Container';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const Frame = styled.View<{theme: Theme}>`
  ${props => props.theme.shadows.card}
`;

interface Props extends ViewProps {
  children;
}

function Card(props: Props) {
  return (
    <Frame>
      <Container level={'secondary'} style={[styles.container, props.style]}>
        {props.children}
      </Container>
    </Frame>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: widthPercentageToDP(3.5),
    paddingVertical: widthPercentageToDP(4),
  },
});

export default Card;
