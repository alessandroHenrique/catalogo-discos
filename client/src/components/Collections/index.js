import { connect } from 'react-redux';
import CollectionList from './CollectionList';
import { deleteCollection, updateCollection } from '../../actions/collections';

const mapStateToProps = (state) => ({
  collections: state.collections
});

const mapDispatchToProps = (dispatch) => ({
  deleteCollection: (id) => dispatch(deleteCollection(id)),
  updateCollection: (id, title) => dispatch(updateCollection(id, title))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList);
