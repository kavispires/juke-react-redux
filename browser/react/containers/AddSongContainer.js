import React from 'react';
import {connect} from 'react-redux';
import AddSong from '../components/AddSong';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';

class AddSongContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songId: 1,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {

  // //   this.unsubscribe = store.subscribe(() => {
  // //     this.setState(store.getState());
  // //   });

  // //   store.dispatch(loadAllSongs());
  // this.props.loadAllSongs();
  // }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {

    evt.preventDefault();

    const playlistId = this.props.playlists.selected.id;
    const songId = this.state.songId;

    this.props.addSongToPlaylist(playlistId, songId);
  }

  render() {
    const songs = this.props.songs;
    const error = this.state.error;
    return (
      <AddSong
        {...this.props}
        songs={songs}
        error={error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} />
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
      songs: state.songs,
      playlists: state.playlists
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
      addSongToPlaylist: function(playlistId, songId) {
        dispatch(addSongToPlaylist(playlistId, songId))
      },
      loadAllSongs: function() {
        dispatch(loadAllSongs());
      }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSongContainer);
