import React from 'react'
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { routes } from './routes';

import createBrowserHistory from 'histroy/lib/createBrowserHistory';

ReactDOM.render(
  <Router routes={routes} history={createBrowserHistory()} />,
  document.getElementById('app')
)
