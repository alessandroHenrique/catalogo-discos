import CollectionList from '../../../components/Collections/CollectionList';
import React from 'react';
import Store from '../../../store/configureStore';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

const store = Store();

describe('CollectionList', () => {
  it('should render a CollectionList', () => {

    const component = renderer.create(
      <Provider store={store}>
        <CollectionList
          collections={[]}
          deleteCollection={() => {}}
          updateCollection={() => {}}
        />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
