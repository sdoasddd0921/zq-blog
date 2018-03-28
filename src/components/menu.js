/**
 * 功能：显示右侧各功能模块。
 */
import React from 'react';

import '../css/menu.css';

class Menu extends React.Component {
  render() {
    const { menu } = this.props;
    console.log(this.props)
    const menuItems = menu.map((item, index) => {
      if (item.disable) {
        return null;
      }
      return (
        <div key={index} className="menu-item">
          {
            !item.title
            ? null
            : <div className={`item-title iconfont icon-${item.icon}`}>{item.title}</div>
          }
        </div>
      );
    });
    return (
      <div id="menu" style={{width: '30%'}} className="clear-float">
        {menuItems}
      </div>
    );
  }
}

export default Menu;