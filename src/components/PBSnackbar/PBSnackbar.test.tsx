import React from 'react';
import ReactDOM from 'react-dom';
import PBSnackbar from './PBSnackbar.tsx';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PBSnackbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});