import { StackNavigator } from 'react-navigation';
import PhotoGalleryScreen from '../screens/PhotoGalleryScreen';
import PhotoCommentsScreen from '../screens/PhotoCommentsScreen';
import MapScreen from '../screens/MapScreen';

const FeedStackNavigator = StackNavigator(
  {
    Gallery: {
      screen: PhotoGalleryScreen,
    },
    Comments: {
      screen: PhotoCommentsScreen,
    },
    Map: {
      screen: MapScreen,
    },
  },
  {
    initialRouteName: 'Gallery',
  },
);

export default FeedStackNavigator;
