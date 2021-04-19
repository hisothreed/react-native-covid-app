import {Navigation} from 'react-native-navigation';
import Countries from '../screens/Countries';
import Home from '../screens/Home';
import SortPicker from '../screens/Home/SortPicker';
import ScreenWrapper from '../shared/hoc/ScreenWrapper';

export enum Screens {
  Home = 'Home',
  Countries = 'Countries',
  SortPicker = 'SortPicker',
}

const registerScreen = (name: string, component: React.FC<any>) => {
  Navigation.registerComponent(
    name,
    () => props => ScreenWrapper(props, component),
    () => component,
  );
};

registerScreen(Screens.Home, Home);
registerScreen(Screens.SortPicker, SortPicker);
registerScreen(Screens.Countries, Countries);
