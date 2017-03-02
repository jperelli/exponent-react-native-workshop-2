import { StackNavigator } from 'react-navigation';
import PhotoGalleryScreen from '../screens/PhotoGalleryScreen';

/**
YOUR ASSIGNMENT:
  Add two new routes on this navigator that contains
  PhotoCommentsScreen and MapScreen.
*/

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
