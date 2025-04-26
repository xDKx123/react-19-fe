import React from 'react';
import ReactDOM from 'react-dom';
import BrowseViewHeader from './BrowseViewHeader.tsx';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowseViewHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});