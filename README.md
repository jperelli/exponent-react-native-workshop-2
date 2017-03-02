# Workshop: Intro to React Native with Exponent - Project 2

https://exp.host/@test123/exponent-react-native-workshop-2

<p align='center'>
  <img
      src="http://i.imgur.com/6nKFtpW.jpg"
      alt="rmotr.com React Native Exponent Demo" />
</p>

## Assignments

#### 1) Expand our _GalleryStackNavigator_

Add two new routes to the _GalleryStackNavigator_ that contains _PhotoCommentsScreen_ and _MapScreen_.

#### 2) Add _TabNavigator_ with three tabs

Our app now will have three tabs. The first one will contain out _GalleryStackNavigator_; the second one will have a new _CameraStackNavigator_ and the last one will have a new _ProfileStackNavigator_.

#### 3) Allow users to post new comments on each photo

On _PhotoComments.js_ component you will have to write an _addComment_ function that updates the state pushing a new comment to the comments list.

#### 4) Save new photos using _AsyncStorage_

Our _CameraScreen.js_ component have two functions to set photo and its caption data. These functions are passed as props to _CameraOpenRoll_, _CameraTakePhoto_ and _ImageForm_ (if there is a photo on state, this component will show a form to set a caption). On that last mentioned component write a _savePhoto_ function that use _AsyncStorage_ to save the photo and its caption.

#### 5) Refactor photos feed showing previously saved photos

On _PhotoList.js_ component you will have to write a _getPhotos_ function that uses _AsyncStorage_ to retrieve all the previously saved photos.

#### 6) Show our _Map_ component with a marker on the location passed on route params

On _PhotoHeader.js_ component we have a _goToMap_ function that passes location info as params to our _MapScreen.js_ component. There we will have to get that params and pass them to the _Map.js_ component to render a marker pointing that location on a map.
