import { StackNavigator } from 'react-navigation';
import PhotoGalleryScreen from '../screens/PhotoGalleryScreen';

const FeedStackNavigator = StackNavigator(
  {
    Gallery: {
      screen: PhotoGalleryScreen,
    },
  },
  {
    initialRouteName: 'Gallery',
  },
);

export default FeedStackNavigator;
