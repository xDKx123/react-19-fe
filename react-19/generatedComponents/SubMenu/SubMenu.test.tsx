import React from 'react';
import ReactDOM from 'react-dom';
import SubMenu from './SubMenu';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});