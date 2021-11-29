import React from "react";
import CartWidget from "../Cartwidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/#">
          <img src="../imagenes/logo.png" width="50" alt="logo_burger" />
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">
                Menú
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Categoría A
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Categoría B
              </a>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav md-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/#">
              0
            </a>
          </li>
          <CartWidget />
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
