import React, {useState, useMemo, useLayoutEffect} from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import {
  Options,
  Navigation,
  NavigationComponentProps,
} from 'react-native-navigation';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useTheme} from 'styled-components';
import {Theme} from '../../theme/types';
import {ICountry} from '../../lib/types/ICountry';
import Row from '../../shared/components/Row';
import {Screens} from '../../navigation/screens';
import {icons} from '../../assets';
import CountryItem from './CountryItem';

interface Props {
  countries: Array<ICountry>;
}

export const showCountries = (passProps: Props) => {
  return Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: Screens.Countries,
            passProps,
          },
        },
      ],
    },
  });
};

function Countries(props: Props & NavigationComponentProps) {
  const theme = useTheme() as Theme;
  const [query, setQuery] = useState('');
  useLayoutEffect(() => {
    const subscription = Navigation.events().registerNavigationButtonPressedListener(
      () => {
        Navigation.dismissModal(props.componentId);
      },
    );
    return () => subscription.remove();
  }, []);

  const renderItem = ({item}) => {
    return <CountryItem country={item} />;
  };
  const items = useMemo(() => {
    let items = props.countries.filter(option =>
      `${option.Country}`.match(`.*${query}.*`),
    );
    return items;
  }, [query]);

  const keyExtractor = (item: ICountry, index) =>
    index.toString() + '-' + Math.random();

  return (
    <FlatList
      stickyHeaderIndices={[0]}
      ListHeaderComponent={
        <Row
          style={[
            styles.searchContainer,
            {backgroundColor: theme.colors.generic.white},
          ]}>
          <View
            style={[
              styles.inputContainer,
              {backgroundColor: theme.colors.gray.gray6},
            ]}>
            <TextInput
              onChangeText={setQuery}
              value={query}
              autoFocus
              style={styles.input}
              placeholder={'Search by country name'}
            />
          </View>
        </Row>
      }
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      extraData={items}
      data={items}
    />
  );
}
Countries.options = (): Options => ({
  topBar: {
    title: {
      text: 'Cases by country',
    },
    leftButtons: [
      {
        icon: icons.close,
        id: 'dismiss',
        text: 'Cancel',
      },
    ],
  },
});

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: widthPercentageToDP(3.5),
    paddingVertical: widthPercentageToDP(2),
  },
  inputContainer: {
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
    paddingHorizontal: widthPercentageToDP(3),
  },
  input: {height: 45},
});

export default Countries;
