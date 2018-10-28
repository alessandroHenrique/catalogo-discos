import React from 'react';
import PropTypes from 'prop-types';
import DiscList from '../Discs';
import AddDiscForm from '../DiscForm';

class Collection extends React.Component {
  state = {
    isEditing: false,
    textInput: this.props.title,
    searchInput: '',
    discs: this.props.discs || []
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    discs: PropTypes.array,
    updateCollection: PropTypes.func.isRequired,
    deleteCollection: PropTypes.func.isRequired,
    collectionId: PropTypes.number.isRequired
  }

  textInputChange = (e) => {
    const value = e.target.value;

    this.setState(() => ({
      textInput: value
    }));
  };

  changeIsEditing = (e) => {
    if (e.target.innerHTML === 'Save') {
      this.props.updateCollection(this.state.textInput);
    }
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing
    }));
  }

  searchInputChange = (e) => {
    const value = e.target.value;

    this.setState(() => ({
      searchInput: value
    }));

    this.getVisibleDiscs(value);
  };

  getVisibleDiscs = (text) => {
    this.setState(() => ({
      discs: this.props.discs.filter(
        (disc) => disc.title.includes(text) || disc.author.includes(text) ? disc : false
      )
    }));
  }

  render() {
    const widgetMessage = () => {
      if (this.state.discs.length > 0) {
        return <DiscList discs={this.state.discs} />;
      } else {
        if (this.props.discs && this.props.discs.length > 0) {
          return <span className="widget__message">Nenhum disco encontrado!</span>;
        }
        return <span className="widget__message">Adicione algum disco!</span>;
      }
    }

    return (
      <li className="mt-5 text-center px-0">
        <div className="card widget">
          <div className="card-header widget-header d-flex">
            <h4 className="mr-auto">
              Coleção: {this.state.isEditing ? <input className="add-option__input" type="text" onChange={this.textInputChange} value={this.state.textInput} /> : <span>{this.state.textInput}</span>}
              <button disabled={!this.state.textInput} onClick={this.changeIsEditing} className={`btn ml-2 mr-2 ${this.state.textInput ? 'btn-primary' : 'btn-secondary' }`}>{this.state.isEditing ? 'Save' : 'Edit'}</button>
              <button className="btn btn-danger" onClick={() => this.props.deleteCollection()}>Delete</button>
            </h4>
            <input className="add-option__input search" type="text" onChange={this.searchInputChange} value={this.state.searchInput} placeholder="Search Disc"/>
            <i className="fa fa-search fa-2x" />
          </div>
          <div className="card-body">
            {
              widgetMessage()
            }
          </div>
          <AddDiscForm collectionId={this.props.collectionId} />
        </div>
      </li>
    );
  }
}

export default Collection;
