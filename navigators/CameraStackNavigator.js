import { StackNavigator } from 'react-navigation';
import CameraScreen from '../screens/CameraScreen';

const CameraStackNavigator = StackNavigator(
  {
    Camera: {
      screen: CameraScreen,
    },
  },
  {
    initialRouteName: 'Camera',
  },
);

export default CameraStackNavigator;
