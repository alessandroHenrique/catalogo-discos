import { connect } from 'react-redux';
import DiscList from './DiscList';
import { updateDisc, deleteDisc } from '../../actions/discs';

const mapDispatchToProps = (dispatch) => ({
  updateDisc: (disc) => dispatch(updateDisc(disc)),
  deleteDisc: (id, collectionId) => dispatch(deleteDisc(id, collectionId))
});

export default connect(null, mapDispatchToProps)(DiscList);
