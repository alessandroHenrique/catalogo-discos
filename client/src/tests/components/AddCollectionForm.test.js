import ColletionForm from '../../components/CollectionForm/AddCollectionForm';
import React from 'react';
import renderer from 'react-test-renderer';


describe('AddCollectionForm', () => {
  it('should render add collection form', () => {

    const component = renderer.create(
      <ColletionForm
        handleAddCollection={() => {}}
      />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
