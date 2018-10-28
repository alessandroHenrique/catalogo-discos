import { connect } from 'react-redux';
import { addDisc } from '../../actions/discs';
import AddDiscForm from './AddDiscForm';

const mapDispatchToProps = (dispatch) => ({
  handleAddDisc: (disc) => dispatch(addDisc(disc))
});

export default connect(null, mapDispatchToProps)(AddDiscForm);
