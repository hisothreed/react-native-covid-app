import {Navigation} from 'react-native-navigation';
import {startApp} from './src/navigation/navigation';

Navigation.events().registerAppLaunchedListener(() => {
  startApp();
});
