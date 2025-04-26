import React from 'react';
import ReactDOM from 'react-dom';
import GeneralEdit from './GeneralEdit';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GeneralEdit />, div);
  ReactDOM.unmountComponentAtNode(div);
});