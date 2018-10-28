import DiscForm from '../../../components/DiscForm/AddDiscForm';
import React from 'react';
import renderer from 'react-test-renderer';


describe('DiscForm', () => {
  it('should render add disc form', () => {

    const component = renderer.create(
      <DiscForm
        handleAddCollection={() => {}}
      />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
