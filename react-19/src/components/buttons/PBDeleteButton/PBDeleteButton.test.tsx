import React from 'react';
import ReactDOM from 'react-dom';
import PBDeleteButton from './PBDeleteButton.tsx';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PBDeleteButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});