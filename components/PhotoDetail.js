import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import Image from 'react-native-image-progress';
import PhotoHeader from './PhotoHeader';
import PhotoFooter from './PhotoFooter';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLiked: false };

    this.likePhoto = this.likePhoto.bind(this);
  }

  likePhoto() {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <PhotoHeader
          profilePicture={this.props.photo.profilePicture}
          username={this.props.photo.username}
          locationName={this.props.photo.location}
          latitude={this.props.photo.latitude}
          longitude={this.props.photo.longitude}
        />

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: this.props.photo.url }}
            alt={this.props.photo.name}
          />
        </View>

        <PhotoFooter
          isLiked={this.state.isLiked}
          likes={this.props.photo.likes}
          likePhoto={this.likePhoto}
          username={this.props.photo.username}
          photoCaption={this.props.photo.caption}
          creationDate={this.props.photo.creationDate}
        />
      </View>
    );
  }
}

PhotoDetail.propTypes = {
  photo: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    margin: 5,
  },

  imageContainer: {
    alignItems: 'stretch',
  },

  image: {
    height: 400,
  },
});

export default PhotoDetail;
