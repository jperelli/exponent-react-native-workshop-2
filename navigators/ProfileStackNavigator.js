import { StackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/ProfileScreen';

const ProfileStackNavigator = StackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName: 'Profile',
  },
);

export default ProfileStackNavigator;
