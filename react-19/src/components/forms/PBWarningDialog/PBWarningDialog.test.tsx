import React from 'react';
import ReactDOM from 'react-dom';
import PBWarningDialog from './PBWarningDialog.tsx';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PBWarningDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});
