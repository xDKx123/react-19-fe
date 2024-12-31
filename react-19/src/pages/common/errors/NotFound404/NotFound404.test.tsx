import React from 'react';
import ReactDOM from 'react-dom';
import NotFound404 from './NotFound404.tsx';
import { it } from 'node:test';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotFound404 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
