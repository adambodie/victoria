import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './Components/Footer';
import renderer from 'react-test-renderer';
import formUrl from './Components/formUrl.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correct url', () => {
  const tree = renderer.create(formUrl('135847282452394', '25')).toJSON();
  expect(tree).toMatchSnapshot();
});
