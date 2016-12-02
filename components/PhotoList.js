import React, { PropTypes } from 'react';
import { ScrollView, Text, StyleSheet,
         AsyncStorage, RefreshControl } from 'react-native';
import PhotoDetail from './PhotoDetail';

class PhotoList extends React.Component {
  constructor(props) {
    super(props);

    this.onRefresh = this.onRefresh.bind(this);
    this.state = {
      photos: [],
      refreshing: false
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
    // TODO: Remove getPhotos logic. Place hint about AsyncStorage
    return AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiGet(keys.sort()))
      .then((stores) => {
        const photos = [];

        stores.map((result, i, store) => {
            // get at each store's key/value so you can work with it
          const key = store[i][0];
          const value = JSON.parse(store[i][1]);

          const uri = value.uri;
          const caption = value.caption;

          const photo = {
            id: key,
            caption,
            url: uri,
            username: 'Anonymous',
            profilePicture: 'https://randomuser.me/api/portraits/lego/1.jpg',
            location: 'Unknown',
            likes: 0,
            latitude: 35,
            longitude: 74,
            creationDate: key
          };

          return photos.unshift(photo);
        });

        this.setState({ photos });
      });
  }

  renderPhotos() {
    return this.state.photos.map(photo =>
      <PhotoDetail
        key={photo.id}
        photo={photo}
      />
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
  fetchPhotos: PropTypes.func
};

const styles = StyleSheet.create({
  noPhotos: {
    color: '#AAA',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 30
  }
});

export default PhotoList;
