import {connect} from 'react-redux';
import Albums from '../components/Albums';

const mapStateToProps = function (state, ownProps) {
  return {
    albums: state.albums.list
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {  };
};

const AlbumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);

export default AlbumContainer;



/* export default class extends Component {

  constructor() {
    super();
    this.state = store.getState().albums;
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().albums);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <Albums albums={this.state.list}/>;
  }

}*/