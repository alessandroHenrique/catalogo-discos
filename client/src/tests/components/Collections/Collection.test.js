import Collection from '../../../components/Collections/Collection';
import React from 'react';
import Store from '../../../store/configureStore';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

const store = Store();

describe('Collection', () => {
  it('should render a Collection', () => {

    const component = renderer.create(
      <Provider store={store}>
        <Collection
          title={'title'}
          discs={[]}
          deleteCollection={() => {}}
          updateCollection={() => {}}
          collectionId={1}
        />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
