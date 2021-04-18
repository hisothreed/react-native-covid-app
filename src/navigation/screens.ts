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

const registerScreenWithRedux = (name: string, component: React.FC<any>) => {
  Navigation.registerComponent(
    name,
    () => props => ScreenWrapper(props, component),
    () => component,
  );
};

registerScreenWithRedux(Screens.Home, Home);
registerScreenWithRedux(Screens.SortPicker, SortPicker);
registerScreenWithRedux(Screens.Countries, Countries);
