/**
 * 功能：博客头部，很简单。简单的介绍和导航。
 */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import '../css/header.css';

class Nav extends React.Component {
  render() {
    return (
      <div id="nav">
        <NavLink exact to="/">
          <i className="iconfont icon-3home">首页</i>
        </NavLink>
        <NavLink to="/about">
          <i className="iconfont icon-user">关于</i>
        </NavLink>
      </div>
    );
  }
}

class Head extends React.Component {
  render() {
    return (
      <div id="head" className="block">
        <div className="site-intro">
          <h1 style={{display: 'none'}}>萤火虫</h1>
          <Link type="span" className="name" to="/">萤火虫</Link>
          <p className="discription">萤火虫的博客</p>
        </div>
        <Nav />
      </div>
    );
  }
}

export default Head;