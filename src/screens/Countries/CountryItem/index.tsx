import React from 'react';
import { View } from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useTheme} from 'styled-components';
import {ICountry} from '../../../lib/types/ICountry';
import Card from '../../../shared/components/Card';
import Label from '../../../shared/components/Label';
import Row from '../../../shared/components/Row';
import {Theme} from '../../../theme/types';

interface Props {
  country: ICountry;
}
function CountryItem(props: Props) {
  const theme = useTheme() as Theme;
  const sections = [
    {
      key: 'TotalConfirmed',
      title: 'Cases',
      color: theme.colors.generic.red,
    },
    {
      key: 'TotalRecovered',
      title: 'Recovered',
      color: theme.colors.generic.blue,
    },
    {
      key: 'TotalDeaths',
      title: 'Deaths',
      color: theme.colors.generic.black,
    },
  ];
  return (
    <Card
      style={{
        marginHorizontal: widthPercentageToDP(4),
        marginVertical: widthPercentageToDP(3),
      }}>
      <Label weight={'bold'} size={'title3'}>
        {props.country.Country}
      </Label>
      <Row justifyContent={'space-between'} style={{ marginTop: widthPercentageToDP(3) }}>
        {sections.map(section => (
          <View>
            <Label
              key={section.key}
              weight={'semibold'}
              color={theme.colors.text.primary}
              size={'title3'}>
              {props.country[section.key]}
            </Label>
            <Label
              key={section.key}
              weight={'semibold'}
              color={section.color}
              size={'caption1'}>
              {section.title}
            </Label>
          </View>
        ))}
      </Row>
    </Card>
  );
}

export default CountryItem;
