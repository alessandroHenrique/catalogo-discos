import React from 'react';
import PropTypes from 'prop-types';

class AddDiscForm extends React.Component {
  state = {
    titleInput: '',
    authorInput: '',
  }

  static propTypes = {
    handleAddDisc: PropTypes.func.isRequired
  }

  handleTitleChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({
      titleInput: value
    }));
  }

  handleAuthorChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({
      authorInput: value
    }));
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.handleAddDisc({
      title: this.state.titleInput,
      author: this.state.authorInput,
      collection_id: this.props.collectionId
    });
    this.setState(() => ({
      titleInput: '',
      authorInput: '',
    }));
  }

  render() {
    return (
      <form className="add-option text-left align-items-center add-disc-form justify-content-center" onSubmit={this.handleSubmitForm}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input className="add-option__input" type="text" id="title" onChange={this.handleTitleChange} value={this.state.titleInput} />
        </div>
        <div className="form-group">
          <label htmlFor="author">Autor</label>
          <input className="add-option__input" type="text" id="author" onChange={this.handleAuthorChange} value={this.state.authorInput} />
        </div>

        <button type="submit" className="button">Add Disc</button>
      </form>
    );
  }
}

export default AddDiscForm;
