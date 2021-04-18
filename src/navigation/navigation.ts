import {Navigation} from 'react-native-navigation';
import {Screens} from './screens';

function startApp() {
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

export {startApp};
