import moment from 'moment';
import _ from 'lodash';
import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useTheme} from 'styled-components';

import Card from '../../../shared/components/Card';
import Label from '../../../shared/components/Label';
import ProgressIndicator from '../../../shared/components/ProgressIndicator';
import Row from '../../../shared/components/Row';
import {Theme} from '../../../theme/types';

interface Props {
  cases: number;
  deaths: number;
  recovered: number;
}

function Stats(props: Props) {
  const {colors} = useTheme() as Theme;

  const sections = useMemo(() => {
    const max = _.max([props.cases, props.deaths, props.recovered]);
    return [
      {
        count: props.cases,
        label: 'Cases',
        color: colors.text.secondary,
        barColor: colors.generic.blue,
        progress: (props.cases / max) * 100,
      },

      {
        count: props.recovered,
        label: 'Recovered',
        color: colors.text.secondary,
        barColor: colors.generic.green,
        progress: (props.recovered / max) * 100,
      },
      {
        count: props.deaths,
        label: 'Deaths',
        color: colors.text.secondary,
        barColor: colors.gray.gray3,
        progress: (props.deaths / max) * 100,
      },
    ];
  }, [props]);
  return (
    <Card>
      <View
        style={[styles.header, {borderBottomColor: colors.seperator.opaque}]}>
        <Label type={'primary'} weight={'semibold'} size={'body'}>
          Global cases
        </Label>
        <Label
          style={{marginTop: 5}}
          weight={'regular'}
          type={'secondary'}
          size={'subhead'}>
          {moment().format('DD-MM-YYYY')}
        </Label>
      </View>
      {sections.map(section => (
        <View>
          <Row
            alignItems={'baseline'}
            style={{
              paddingVertical: widthPercentageToDP(4),
            }}>
            <Label weight={'bold'} size={'title1'}>
              {section.count}
            </Label>
            <Label
              color={section.color}
              style={{marginLeft: widthPercentageToDP(1)}}
              weight={'semibold'}
              size={'callout'}>
              {section.label}
            </Label>
          </Row>
          <ProgressIndicator
            color={section.barColor}
            progress={section.progress}>
            <Label
              color={'white'}
              weight={'semibold'}
              size={'footnote'}
              style={{marginLeft: widthPercentageToDP(2)}}>
              {section.count}
            </Label>
          </ProgressIndicator>
        </View>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    paddingBottom: widthPercentageToDP(3),
  },
});

export default Stats;
