import React from 'react';
import ReactDOM from 'react-dom';
import AddEditUser from './AddEditUser';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddEditUser />, div);
  ReactDOM.unmountComponentAtNode(div);
});