import React, { Component } from 'react';
import Header from './Header';
import CollectionForm from './CollectionForm';
import Collections from './Collections';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <CollectionForm />
          <Collections />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchCollections();
  }
}

export default App;
