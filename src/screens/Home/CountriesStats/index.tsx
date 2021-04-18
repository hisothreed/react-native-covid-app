import moment from 'moment';
import _ from 'lodash';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useTheme} from 'styled-components';
import Card from '../../../shared/components/Card';
import Label from '../../../shared/components/Label';
import Row from '../../../shared/components/Row';
import {Theme} from '../../../theme/types';
import AppIcon from '../../../shared/components/AppIcon';
import {ICountry} from '../../../lib/types/ICountry';
import styled from 'styled-components/native';

interface Props {
  onSort: () => void;
  onFilter: () => void;
  countries: Array<ICountry>;
}

const FilterButton = styled.TouchableOpacity<{size; theme: Theme}>`
  border-radius: ${props => props.size};
  background: ${props => props.theme.colors.gray.gray5};
  align-items: center;
  justify-content: center;
  width: ${props => props.size};
  height: ${props => props.size};
`;

function CountriesStats(props: Props) {
  const {colors} = useTheme() as Theme;
  const sections = [
    {
      key: 'TotalConfirmed',
      title: 'Cases',
      color: colors.generic.red,
    },
    {
      key: 'TotalRecovered',
      title: 'Recovered',
      color: colors.generic.blue,
    },
    {
      key: 'TotalDeaths',
      title: 'Deaths',
      color: colors.generic.black,
    },
  ];
  return (
    <Card style={styles.container}>
      <Row
        style={[styles.header, {borderBottomColor: colors.seperator.opaque}]}>
        <View>
          <Label type={'primary'} weight={'semibold'} size={'body'}>
            Cases by country
          </Label>
          <Label
            style={styles.date}
            weight={'regular'}
            type={'secondary'}
            size={'subhead'}>
            {moment().format('DD-MM-YYYY')}
          </Label>
        </View>
        <Row style={{marginLeft: 'auto'}}>
          <FilterButton
            onPress={props.onSort}
            style={{marginRight: 10}}
            size={widthPercentageToDP(10)}>
            <AppIcon.Ionicons
              name={'filter-outline'}
              size={widthPercentageToDP(4)}
              color={colors.generic.blue}
            />
          </FilterButton>
          <FilterButton onPress={props.onFilter} size={widthPercentageToDP(10)}>
            <AppIcon.Ionicons
              name={'search'}
              size={widthPercentageToDP(4)}
              color={colors.generic.blue}
            />
          </FilterButton>
        </Row>
      </Row>
      <Row style={{marginTop: 10}}>
        <Label
          size={'caption1'}
          weight={'regular'}
          type={'secondary'}
          style={styles.nameHeader}>
          Name
        </Label>
        {sections.map(section => (
          <Label
            size={'caption1'}
            weight={'regular'}
            type={'secondary'}
            style={styles.valueHeader}>
            {section.title}
          </Label>
        ))}
      </Row>
      {props.countries.map(country => (
        <View key={country.ID}>
          <Row alignItems={'baseline'} style={styles.row}>
            <Label style={{width: '40%'}} weight={'bold'} size={'subhead'}>
              {country.Country}
            </Label>
            {sections.map(section => (
              <Label
                key={section.key}
                style={styles.value}
                weight={'light'}
                color={section.color}
                size={'footnote'}>
                {country[section.key]}
              </Label>
            ))}
          </Row>
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
  date: {marginTop: 5},
  row: {
    paddingVertical: widthPercentageToDP(3),
  },
  value: {width: '20%', textAlign: 'center'},
  valueHeader: {width: '20%', textAlign: 'center'},
  nameHeader: {width: '40%', textAlign: 'left'},
  container: {
    marginTop: widthPercentageToDP(7),
  },
});

export default CountriesStats;
