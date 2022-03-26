import * as ReactDOM from 'react-dom';
import * as store from './mobx';

import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { createBrowserHistory } from 'history';
import { router } from './mobx/';
import { syncHistoryWithStore } from 'mobx-react-router';

const rootElement = document.getElementById('root');
const browserHistory = createBrowserHistory();

const history = syncHistoryWithStore(browserHistory, router);

ReactDOM.render(
  <Provider {...store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  rootElement
);