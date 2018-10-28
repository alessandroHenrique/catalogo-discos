import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Collection App'
};

export default Header;
