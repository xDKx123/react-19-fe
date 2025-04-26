import React from 'react';
import ReactDOM from 'react-dom';
import AddEditModel from './AddEditModel.tsx';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddEditModel />, div);
  ReactDOM.unmountComponentAtNode(div);
});