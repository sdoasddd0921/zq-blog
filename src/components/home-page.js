import React from 'react';
import Head from './header';
import Body from './list-body';
import Menu from './menu';

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <Head />
        <Body />
        <Menu />
      </div>
    );
  }
}

export default Home;