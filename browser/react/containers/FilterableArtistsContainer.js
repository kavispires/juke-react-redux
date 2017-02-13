import React from 'react';
import {connect} from 'react-redux';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FilterableArtistsContainer extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      inputValue: ''
    }

    this.handleChange = this.handleChange.bind(this);

  }

  // componentDidMount() {
  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState(store.getState().artists);
  //   });
  // }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    console.log(this.props)
    const inputValue = this.state.inputValue;
    const filteredArtists = this.state.list.filter(artist => artist.name.match(inputValue));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <Artists artists={filteredArtists}/>
      </div>
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  console.log('HERE', state);
  return {
      inputValue: state.inputValue,
      // filteredArtists: state.artists.list
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
)(FilterableArtistsContainer);
