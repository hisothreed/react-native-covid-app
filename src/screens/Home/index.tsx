import React, {useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet} from 'react-native';
import {Options} from 'react-native-navigation';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useQuery} from 'react-query';
import {summaryApi} from '../../lib/api/summaryApi';
import Container from '../../shared/components/Container';
import SafeArea from '../../shared/components/SafeArea';
import HomeHeader from './HomeHeader';
import Slogan from './Slogan';
import Stats from './Stats';
import CountriesStats from './CountriesStats';
import {showCountries} from '../Countries';
import {showSortPicker} from './SortPicker';

function Home() {
  const [sort, setSort] = useState(null);
  const {error, data, isFetching, refetch, isLoading} = useQuery(
    summaryApi.get.key,
    summaryApi.get.exec,
    {
      select: (data: any) => {
        let countries = data.Countries;
        if (sort) {
          let desc = sort.split(':')[0] === 'desc';
          let key = sort.split(':')[1];
          countries = countries.sort((a, b) =>
            desc ? b[key] - a[key] : a[key] - b[key],
          );
        }
        return {
          cases: data.Global.TotalConfirmed,
          deaths: data.Global.TotalDeaths,
          recovered: data.Global.TotalRecovered,
          countries,
        };
      },
    },
  );
  const handleSort = () => {
    showSortPicker({
      onSubmit: value => {
        setSort(value);
      },

      options: [
        {
          label: 'Deaths (Most to Least)',
          value: 'desc:TotalDeaths',
        },
        {
          label: 'Deaths (Least to Most)',
          value: 'asc:TotalDeaths',
        },
        {
          label: 'Cases (Most to Least)',
          value: 'desc:TotalConfirmed',
        },
        {
          label: 'Cases (Least to Most)',
          value: 'asc:TotalConfirmed',
        },
        {
          label: 'Recovered (Most to Least)',
          value: 'desc:TotalRecovered',
        },
        {
          label: 'Recovered (Least to Most)',
          value: 'asc:TotalRecovered',
        },
      ],
    });
  };
  const handleFilter = () => {
    showCountries({
      countries: data.countries,
    });
  };
  return (
    <SafeArea style={styles.safeArea}>
      <ScrollView
        refreshControl={
          <RefreshControl
            onRefresh={refetch}
            refreshing={isFetching || isLoading}
          />
        }
        stickyHeaderIndices={[0]}>
        <HomeHeader />
        <Container style={styles.container}>
          <Slogan />
          {!isFetching && !error && (
            <>
              <Stats
                cases={data.cases}
                deaths={data.deaths}
                recovered={data.recovered}
              />
              <CountriesStats
                onFilter={handleFilter}
                onSort={handleSort}
                countries={data?.countries?.slice?.(0, 6) || []}
              />
            </>
          )}
        </Container>
      </ScrollView>
    </SafeArea>
  );
}

Home.options = (): Options => ({
  topBar: {
    visible: false,
  },
});

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: widthPercentageToDP(4)},
  safeArea: {flex: 1},
});

export default Home;
