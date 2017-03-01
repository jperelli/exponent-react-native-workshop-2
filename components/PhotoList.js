import React, { PropTypes } from 'react';
import { ScrollView, Text, StyleSheet,
         AsyncStorage, RefreshControl } from 'react-native';
import PhotoDetail from './PhotoDetail';
import moment from 'moment';

class PhotoList extends React.Component {
  constructor(props) {
    super(props);

    this.onRefresh = this.onRefresh.bind(this);
    this.state = {
      photos: [],
      refreshing: false,
    };
  }

  componentDidMount() {
    this.getPhotos();
  }

  onRefresh() {
    this.setState({ refreshing: true });

    this.getPhotos()
    .then(() => {
      this.setState({ refreshing: false });
    });
  }

  getPhotos() {
    /**
    YOUR ASSIGNMENT:
      Use AsyncStorage to retrieve all the photos saved by the ImagePicker
      component.
    */
    // THIS IS PLACEHOLDER CODE //
    return new Promise((resolve, reject) => {
      const now = moment().format();
      this.setState({
        photos: [{
          id: now,
          caption: 'Photo Caption',
          url: 'http://placeimg.com/401/401/any',
          username: 'Anonymous',
          profilePicture: 'https://randomuser.me/api/portraits/lego/1.jpg',
          location: 'San Francisco, CA',
          likes: 0,
          latitude: 35,
          longitude: 74,
          creationDate: now,
        }],
      }, resolve);
    });
    // THIS IS PLACEHOLDER CODE //
  }

  renderPhotos() {
    return this.state.photos.map(photo =>
      <PhotoDetail
        key={photo.id}
        photo={photo}
      />,
    );
  }

  render() {
    let photos;

    if (this.state.photos.length) {
      photos = this.renderPhotos();
    } else {
      photos = <Text style={styles.noPhotos}>No photos uploaded yet! 😌</Text>;
    }

    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            title="Searching new photos..."
            titleColor="#999"
            style={{ backgroundColor: 'transparent' }}
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
      >
        {photos}
      </ScrollView>
    );
  }
}

PhotoList.propTypes = {
  photos: PropTypes.object,
  fetchPhotos: PropTypes.func,
};

const styles = StyleSheet.create({
  noPhotos: {
    color: '#AAA',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 30,
  },
});

export default PhotoList;
