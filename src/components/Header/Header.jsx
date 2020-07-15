import React from 'react';

import { Logo, Button } from '../../components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>
        <div className="header__cart">
          <Link to="/card">
            <Button className="button--cart" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
