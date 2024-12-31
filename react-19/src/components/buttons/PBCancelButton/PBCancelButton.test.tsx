import React from 'react';
import ReactDOM from 'react-dom';
import PBCancelButton from './PBCancelButton.tsx';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PBCancelButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});