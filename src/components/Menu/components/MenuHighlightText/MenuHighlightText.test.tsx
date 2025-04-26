import React from 'react';
import ReactDOM from 'react-dom';
import MenuHighlightText from './MenuHighlightText.tsx';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuHighlightText />, div);
  ReactDOM.unmountComponentAtNode(div);
});