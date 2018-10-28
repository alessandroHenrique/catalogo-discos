import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/App';
import Store from '../../store/configureStore';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

const store = Store();

it('renders without crashing', () => {
  const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
    );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
