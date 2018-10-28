import React from 'react';
import PropTypes from 'prop-types';

class Disc extends React.Component {
  state = {
    isEditing: false,
    titleInput: this.props.title,
    authorInput: this.props.author,
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    updateDisc: PropTypes.func.isRequired,
    deleteDisc: PropTypes.func.isRequired
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

  changeIsEditing = (e) => {
    if (e.target.innerHTML === 'Save') {
      this.props.updateDisc({
        title: this.state.titleInput,
        author: this.state.authorInput
      });
    }
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing
    }));
  }

  render() {
    return (
      <li className="p-2" style={{ display: 'inline-block' }}>
        <div className="card mt-4 disc-widget text-left" style={{ width: 18 + 'rem', display: 'inline-block' }}>
          <div className="card-header disc-widget-header">
            <h5>{this.state.isEditing ? <input className="add-option__input edit-disc" type="text" onChange={this.handleTitleChange} value={this.state.titleInput} /> : <span>Disco: {this.state.titleInput}</span>}</h5>
          </div>
          <div className="card-body">
            <h6 className="card-subtitle mb-2">{this.state.isEditing ? <input className="add-option__input edit-disc" type="text" onChange={this.handleAuthorChange} value={this.state.authorInput} /> : <span>Autor: {this.state.authorInput}</span>}</h6>
            <button onClick={this.changeIsEditing} className="btn btn-primary mr-2">{this.state.isEditing ? 'Save' : 'Edit'}</button>
            <button className="btn btn-danger" onClick={() => this.props.deleteDisc()}>Delete</button>
          </div>
        </div>
      </li>
    );
  }
}

export default Disc;
