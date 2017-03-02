import { TabNavigator } from 'react-navigation';
import GalleryStackNavigator from './GalleryStackNavigator';
import CameraStackNavigator from './CameraStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import Colors from '../constants/Colors';

const MainTabsNavigator = TabNavigator(
  {
    GalleryTab: {
      screen: GalleryStackNavigator,
    },
    CameraTab: {
      screen: CameraStackNavigator,
    },
    ProfileTab: {
      screen: ProfileStackNavigator,
    },
  },
  {
    initialRouteName: 'GalleryTab',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Colors.rmotrC,
      activeBackgroundColor: Colors.rmotrB,
      inactiveBackgroundColor: Colors.rmotrB,
      indicatorStyle: {
        backgroundColor: Colors.rmotrC,
      },
      style: {
        backgroundColor: Colors.rmotrB,
      },
    },
  },
);

export default MainTabsNavigator;
