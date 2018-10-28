import { connect } from 'react-redux';
import { fetchCollections } from '../actions/collections';
import App from './App';

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(null, mapDispatchToProps)(App);
