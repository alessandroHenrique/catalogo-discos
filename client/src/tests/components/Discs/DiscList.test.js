import DiscList from '../../../components/Discs/DiscList';
import React from 'react';
import Store from '../../../store/configureStore';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

const store = Store();

describe('DiscList', () => {
  it('should render a DiscList', () => {

    const component = renderer.create(
      <Provider store={store}>
        <DiscList
          discs={[]}
        />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
