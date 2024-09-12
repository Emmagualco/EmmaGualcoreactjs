import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">E-Spark Store</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#category1">Category 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#category2">Category 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#category3">Category 3</a>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    );
  };
  
  export default NavBar;