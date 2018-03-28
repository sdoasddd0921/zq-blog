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
        {this.props.navs.map((nav, index) => <NavLink exact={Boolean(nav.exact)} to={nav.path} key={index} >
          <i className={`iconfont icon-${nav.icon}`}>{nav.label}</i>  
        </NavLink>)}
      </div>
    );
  }
}

class Head extends React.Component {
  render() {
    const { username, blog_intro, navs } = this.props;
    return (
      <div id="head" className="block">
        <div className="site-intro">
          <h1 style={{display: 'none'}}>{username}</h1>
          <Link type="span" className="name" to="/">{username}</Link>
          <p className="discription">{blog_intro}</p>
        </div>
        <Nav navs={navs}/>
      </div>
    );
  }
}

export default Head;