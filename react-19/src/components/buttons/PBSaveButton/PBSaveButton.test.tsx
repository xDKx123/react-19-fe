import React from 'react';
import ReactDOM from 'react-dom';
import PBSaveButton from './PBSaveButton.tsx';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PBSaveButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});