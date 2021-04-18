import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Container from '../../../shared/components/Container';
import Label from '../../../shared/components/Label';

function HomeHeader() {
  return (
    <Container style={styles.container}>
      <Label size={'title1'} weight={'bold'} type={'primary'}>
        Covid-19 cases
      </Label>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: widthPercentageToDP(3),
    paddingHorizontal: widthPercentageToDP(3.5),
  },
});

export default HomeHeader;
