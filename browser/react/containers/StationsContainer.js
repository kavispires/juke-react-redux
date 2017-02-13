import {connect} from 'react-redux'
import Stations from '../components/Stations'

const convertSongsToStations = function (songsArray){
    var result = {};
    songsArray.forEach(song => {
        var genre = song.genre;
        if(!result.hasOwnProperty(genre)){
            result[genre] = [];
        }
        result[genre].push(song);
    })
    return result;
}

const mapStateToProps = (state) => {
    return {
        stations: convertSongsToStations(state.songs)
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 

    }
}

const StationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Stations)

export default StationsContainer;