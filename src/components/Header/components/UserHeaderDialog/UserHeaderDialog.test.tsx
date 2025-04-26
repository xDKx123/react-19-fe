import React from 'react';
import ReactDOM from 'react-dom';
import UserHeaderDialog from './UserHeaderDialog.tsx';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserHeaderDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});