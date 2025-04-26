import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout.tsx';
import { it } from 'node:test';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout />, div);
  ReactDOM.unmountComponentAtNode(div);
});
