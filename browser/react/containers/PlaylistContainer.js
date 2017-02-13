import {connect} from 'react-redux';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = function (state, ownProps) {
  return {
      selectedPlaylist: state.playlists.selected,
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
      toggleSong: function (song, list) {
          dispatch(toggleSong(song, list));
      }
  };
};

const PlaylistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);

export default PlaylistContainer;