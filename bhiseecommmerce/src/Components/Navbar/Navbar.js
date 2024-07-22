import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="logo">
        <img src="site-logo-free-img-1.png" alt="Site Logo" />
      </div>
      <div className="navitems">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/all-products">All Products</Link>
        </div>
        <div>
          <Link to="/tshirts">Tshirts</Link>
        </div>
        <div>
          <Link to="/jewelery">jewelery</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>

        <div className='Ac'>
          Account
          <div className="drop">
            <div>
              <Link to="/my-account">My Account</Link>
            </div>
            <div>
              <Link to="/cart">Cart</Link>
            </div>
          </div>
        </div>

        <div className="cart">
          <div className='currencysymb'>
            <p>&#8377;</p>
          </div>
          <div className='carticon'>
            <img src="cart_85989.png" alt="Cart" />
          </div>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
