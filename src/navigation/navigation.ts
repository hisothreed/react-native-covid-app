import {Appearance} from 'react-native';
import {CommandName, Navigation} from 'react-native-navigation';
import theme from '../theme';
import {Screens} from './screens';

function startApp() {
  Appearance.addChangeListener(({colorScheme}) =>
    setDefaultOptions(colorScheme),
  );
  setDefaultOptions(Appearance.getColorScheme());
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: Screens.Home,
            },
          },
        ],
      },
    },
  });
}

const setDefaultOptions = mode => {
  let {colors} = theme(mode);
  return Navigation.setDefaultOptions({
    layout: {
      backgroundColor: colors.background.primary
    },
    topBar: {
      title: {
        color: colors.text.primary,
      },
      backButton: {
        color: colors.generic.black,
      },
      leftButtonColor: colors.generic.black,
      rightButtonColor: colors.generic.black,
      background: {
        color: colors.generic.white,
      },
    },
  });
};
export {startApp};
