import React from 'react';

import logo from '../../assests/img/pizza-logo.svg';

function Logo() {
  return (
    <div className="header__logo">
      <img width="38" src={logo} alt="Pizza logo" />
      <div>
        <h1>React Pizza</h1>
        <p>Самая вкусная пицца во вселенной</p>
      </div>
    </div>
  );
}

export default Logo;
