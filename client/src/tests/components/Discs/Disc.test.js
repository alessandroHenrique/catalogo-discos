import Disc from '../../../components/Discs/Disc';
import React from 'react';
import Store from '../../../store/configureStore';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

const store = Store();

describe('Disc', () => {
  it('should render a Disc', () => {

    const component = renderer.create(
      <Provider store={store}>
        <Disc
          title={'title'}
          author={'author'}
          deleteDisc={() => {}}
          updateDisc={() => {}}
        />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
