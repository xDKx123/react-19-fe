import React from 'react';
import ReactDOM from 'react-dom';
import DefaultBrowsePage from './DefaultBrowsePage.tsx';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DefaultBrowsePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});