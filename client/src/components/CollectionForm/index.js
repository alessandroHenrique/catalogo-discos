import { connect } from 'react-redux';
import { addCollection } from '../../actions/collections';
import AddCollectionForm from './AddCollectionForm';

const mapDispatchToProps = (dispatch) => ({
  handleAddCollection: (name) => dispatch(addCollection(name))
});

export default connect(null, mapDispatchToProps)(AddCollectionForm);
