import React from 'react';
import ReactDOM from 'react-dom';
import LogoutButton from './LogoutButton.tsx';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LogoutButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});