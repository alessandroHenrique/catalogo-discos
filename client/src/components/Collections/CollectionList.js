import React from 'react';
import PropTypes from 'prop-types';
import Collection from './Collection';
import uuid from 'uuid';

const CollectionList = ({ collections, deleteCollection, updateCollection }) => (
  <ul className="list-group list-unstyled">
    {
      collections.map((collection) => (
        <Collection
          key={uuid()}
          title={collection.title}
          discs={collection.discs}
          deleteCollection={() => deleteCollection(collection.id)}
          updateCollection={(title) => updateCollection(collection.id, title)}
          collectionId={collection.id}
        />
      ))
    }
  </ul>
);

CollectionList.propTypes = {
  collections: PropTypes.array,
  deleteCollection: PropTypes.func.isRequired,
  updateCollection: PropTypes.func.isRequired
};

export default CollectionList;
