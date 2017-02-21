import React, { PropTypes } from 'react';
import { View, Text, TextInput,
         TouchableOpacity, StyleSheet } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import moment from 'moment';
import Colors from '../constants/Colors';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    };

    this.saveComment = this.saveComment.bind(this);
    this.updateTextCaptionValue = this.updateTextCaptionValue.bind(this);
  }

  updateTextCaptionValue(text) {
    this.setState({ comment: text });
  }

  saveComment() {
    if (this.state.comment.length) {
      const comment = {
        id: moment().format(),
        name: 'Anonymous',
        comment: this.state.comment,
        profile: 'https://randomuser.me/api/portraits/lego/1.jpg',
        creationDate: moment().format(),
      };

      this.props.addComment(comment);

      this.setState({ comment: '' });
    }
  }

  render() {
    return (
      <View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Add a comment..."
            onChangeText={this.updateTextCaptionValue}
            value={this.state.comment}
            autoCorrect={false}
          />

          <TouchableOpacity
            style={styles.commentText}
            onPress={this.saveComment}
          >
            <Text style={this.state.comment.length ? styles.text : styles.textOff}>
              Post
            </Text>
          </TouchableOpacity>
        </View>

        <KeyboardSpacer topSpacing={-41.5} />
      </View>
    );
  }
}

CommentForm.propTypes = {
  comment: PropTypes.object,
  addComment: PropTypes.func,
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },

  commentInput: {
    flex: 1,
    height: 40,
    fontSize: 13,
    padding: 10,
  },

  commentText: {
    justifyContent: 'center',
    padding: 10,
  },

  text: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },

  textOff: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
    opacity: 0.5,
  },
});

export default CommentForm;
