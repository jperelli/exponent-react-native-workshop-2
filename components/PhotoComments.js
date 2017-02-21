import React, { PropTypes } from 'react';
import { View, ScrollView,
         StyleSheet } from 'react-native';
import PhotoComment from './PhotoComment';
import CommentForm from './CommentForm';
import photoComments from '../data/photoComments.json';

class PhotoComments extends React.Component {
  constructor(props) {
    super(props);
    // TODO: Remove all the logic dealing with state.
    this.state = { comments: [] };

    this.addComment = this.addComment.bind(this);
  }

  componentWillMount() {
    this.setState({
      comments: photoComments,
    });
  }

  addComment(comment) {
    const comments = this.state.comments;
    comments.push(comment);

    this.setState({ comments });
  }

  renderComments() {
    return this.state.comments.map(comment =>
      <PhotoComment
        key={comment.id}
        comment={comment}
      />,
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderComments()}
        </ScrollView>

        <CommentForm
          allComments={this.state.comments}
          addComment={this.addComment}
        />
      </View>
    );
  }
}

PhotoComments.propTypes = {
  comment: PropTypes.object,
};

const styles = StyleSheet.create({
  noPhotos: {
    color: '#AAA',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 30,
  },

  container: {
    flex: 1,
  },
});

export default PhotoComments;
