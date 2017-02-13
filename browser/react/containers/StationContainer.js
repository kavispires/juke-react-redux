import {connect} from 'react-redux'
import Station from '../components/Station'
import {toggleSong} from '../action-creators/player'

const convertSongsToStation = function (songsArray, genre){
    var result = [];
    songsArray.forEach(song => {
        if(song.genre === genre){
            result.push(song);
        }
    })
    return result;
}

const mapStateToProps = function (state, ownProps) {
  return {
      genreName: ownProps.params.genreName,
      songs: convertSongsToStation(state.songs, ownProps.params.genreName),
      currentSong: state.player.currentSong,
      isPlaying: state.player.isPlaying
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
      toggleSong: function (song, list) {
          dispatch(toggleSong(song, list));
      }
  };
}

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;