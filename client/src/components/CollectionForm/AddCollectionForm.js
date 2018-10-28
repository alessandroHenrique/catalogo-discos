import React from 'react';
import PropTypes from 'prop-types';

class AddCollectionForm extends React.Component {
  state = {
    text: ''
  }

  static propTypes = {
    handleAddCollection: PropTypes.func.isRequired
  }

  handleTextChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({
      text: value
    }));
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.handleAddCollection(this.state.text);
    this.setState(() => ({
      text: ''
    }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitForm} className="add-option">
        <input className="add-option__input" type="text" onChange={this.handleTextChange} value={this.state.text} />
        <button disabled={!this.state.text} className={`button ${!this.state.text && 'btn-secondary no-hover'}`} type="submit">Add Collection</button>
      </form>
    );
  }
}

export default AddCollectionForm;
