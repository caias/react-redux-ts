import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import './scss/global.scss';

const rootElement = document.getElementById('app');

render(
  <App />,
  rootElement
);