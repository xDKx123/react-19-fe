import React from 'react';
import ReactDOM from 'react-dom';
import BrowseView from './BrowseView.tsx';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowseView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
