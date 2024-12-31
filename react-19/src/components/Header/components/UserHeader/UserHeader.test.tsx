import React from 'react';
import ReactDOM from 'react-dom';
import UserHeader from './UserHeader.tsx';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});