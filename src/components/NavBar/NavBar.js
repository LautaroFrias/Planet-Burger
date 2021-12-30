import React from "react";
import CartWidget from "../Cartwidget/CartWidget";
import { Link } from "react-router-dom";
import { UseCart } from "../Context/CartContext";

function NavBar() {
  const { CalculateAmount } = UseCart();

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo03'
          aria-controls='navbarTogglerDemo03'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <Link to={"/"} href='/#'>
          <img src='../imagenes/logo.png' width='50' alt='logo_burger' />
        </Link>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
          <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to={"/"} className='btn btn-primary'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={"/category/hamburguesas"} className='btn btn-primary'>
                Hamburguesas
              </Link>
              <Link to={"/category/papas"} className='btn btn-primary'>
                Papas Fritas
              </Link>
            </li>
          </ul>
        </div>
        <ul className='navbar-nav md-auto mb-2 mb-lg-0'>
          <CartWidget />
          <div
            style={{
              height: "23px",
              width: "23px",
              borderRadius: "20px",
              backgroundColor: "green",
              position: "absolute",
              top: "13px",
              right: "10px",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <span style={{ color: "whitesmoke" }}>{CalculateAmount()}</span>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
