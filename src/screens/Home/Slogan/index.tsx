import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Container from '../../../shared/components/Container';
import Label from '../../../shared/components/Label';

function Slogan() {
  return (
    <Container style={styles.container}>
      <Label size={'subhead'} weight={'light'} type={'secondary'}>
        Track worldwide or country specific Covid-19 cases in real time.
      </Label>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: widthPercentageToDP(4),
  },
});

export default Slogan;
