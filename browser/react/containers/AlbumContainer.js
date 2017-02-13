import {connect} from 'react-redux';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = function(state, ownProps) {
  return {
    selectedAlbum: state.albums.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
  };
}

const mapDispatchtoProps = function(dispatch, ownProps) {
  return {
    toggleSong: function(song, list) {
      dispatch(toggleSong(song, list));
    }
  }
}

const AlbumContainer = connect(
  mapStateToProps,
  mapDispatchtoProps
)(Album);

export default AlbumContainer;