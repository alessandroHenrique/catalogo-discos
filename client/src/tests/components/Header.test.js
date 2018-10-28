import Header from '../../components/Header';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Header', () => {
  it('should render Header', () => {

    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
