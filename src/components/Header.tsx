import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
     <header className="app-header">
      <div className="header-left">
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>

      <div className="header-center">
        <div className="site-title">Code Journal</div>
      </div>
      
      <div className="header-right">
        {/* Este lado fica vazio para ajudar a centralizar o título perfeitamente */}
      </div>
    </header>
  );
}

export default Header;
