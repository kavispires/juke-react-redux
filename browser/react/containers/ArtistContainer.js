import {connect} from 'react-redux';
import Artist from '../components/Artist';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = function (state, ownProps) {
  return {
      selectedArtist: state.artists.selected,
      children: state.children
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
      toggleSong: function (song, list) {
          dispatch(toggleSong(song, list));
      }
  };
};

const ArtistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);

export default ArtistContainer;