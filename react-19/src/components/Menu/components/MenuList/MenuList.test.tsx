import React from 'react';
import ReactDOM from 'react-dom';
import MenuList from './MenuList.tsx';
import { it } from 'node:test';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
