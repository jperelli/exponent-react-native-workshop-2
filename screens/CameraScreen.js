import React, { PropTypes } from 'react';
import { View, StyleSheet, Vibration } from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';
import Colors from '../constants/Colors';
import Header from '../components/Header';
import ImageForm from '../components/ImageForm';
import CameraOpenRoll from '../components/CameraOpenRoll';
import CameraTakePhoto from '../components/CameraTakePhoto';

class CameraScreen extends React.Component {
  constructor(props) {
    super(props);

    this.setSelectedOption = this.setSelectedOption.bind(this);
    this.setPhoto = this.setPhoto.bind(this);
    this.setCaption = this.setCaption.bind(this);
    this.state = {
      selectedOption: 'Camera roll',
      photo: {},
      caption: ''
    };
  }

  setSelectedOption(selectedOption) {
    this.setState({ selectedOption });
  }

  setPhoto(photo) {
    this.setState({ photo });
  }

  setCaption(caption) {
    this.setState({ caption });
  }

  render() {
    const options = [
      'Camera roll',
      'Take a new photo'
    ];

    let cameraComponent;
    let imageForm;

    switch (this.state.selectedOption) {
      case 'Camera roll':
        cameraComponent = <CameraOpenRoll setPhoto={this.setPhoto} />;
        break;
      case 'Take a new photo':
        cameraComponent = <CameraTakePhoto setPhoto={this.setPhoto} />;
        break;
      default:
        throw new Error(`unhandled entry selectedOption: ${this.state.selectedOption}`);
    }

    if (this.state.photo.uri) {
      imageForm = (<ImageForm
        photo={this.state.photo}
        caption={this.state.caption}
        setCaption={this.setCaption}
        setPhoto={this.setPhoto}
      />);
    }

    return (
      <View style={styles.container}>
        <View style={styles.segmentedControls}>
          <SegmentedControls
            options={options}
            onSelection={this.setSelectedOption}
            selectedOption={this.state.selectedOption}
            tint={'#FFF'}
            selectedTint={Colors.rmotrB}
            backTint={Colors.rmotrB}
          />
        </View>

        { cameraComponent }

        { imageForm }
      </View>
    );
  }
}

CameraScreen.route = {
  navigationBar: {
    visible: true,
    renderTitle: () => <Header headerText={'Camera'} />,
    backgroundColor: Colors.rmotrB,
    tintColor: Colors.rmotrC
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE'
  },

  segmentedControls: {
    backgroundColor: Colors.rmotrB,
    padding: 7,
    paddingTop: 1
  }
});

export default CameraScreen;
