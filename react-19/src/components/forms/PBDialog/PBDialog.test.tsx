import React from 'react';
import ReactDOM from 'react-dom';
import PBDialog from './PBDialog.tsx';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PBDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});