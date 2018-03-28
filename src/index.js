/**
 * blog 的主页,分为3个大板块,
 * 每个板块需要渲染的内容写在JSON中。
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';

import Head from './components/header';
import Body from './components/list-body';
import Menu from './components/menu';

import infos from './blog.config.json';

import './css/index.css';
import './css/iconfont.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Head {...infos.header} />
        <Body />
        <Menu />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
