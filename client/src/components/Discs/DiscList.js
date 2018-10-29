import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Disc from './Disc'

class DiscList extends React.Component {
  static propTypes = {
    discs: PropTypes.array
  }

  render() {
    return (
      <ul className="list-group d-flex flex-row flex-wrap justify-content-between">
        {
          this.props.discs.map((disc) => (
            <Disc
              title={disc.title}
              author={disc.author}
              key={uuid()}
              deleteDisc={() => this.props.deleteDisc(disc.id, disc.collection_id)}
              updateDisc={(newInfo) => this.props.updateDisc({...newInfo, id: disc.id, collection_id: disc.collection_id})}
            />
          ))
        }
      </ul>
    )
  }
}

export default DiscList;
