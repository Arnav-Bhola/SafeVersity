import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <BrowserRouter>
      <div className=''>
        <div
          className='w3-bar w3-white w3-card'
          id='myNavbar'
        >
          <Link
            to='/'
            className='w3-bar-item w3-button w3-wide'
            onClick={window.location.reload}
          >
            SafeVersity
          </Link>
          <div className={`w3-right`}>
            <Link
              to='/'
              className='w3-bar-item w3-button'
              onClick={window.location.reload}
            >
              HOME
            </Link>
            <Link
              to='/post'
              className='w3-bar-item w3-button'
              onClick={window.location.reload}
            >
              <i className='fa fa-user'></i> POST
            </Link>
            <Link
              to='/support'
              className='w3-bar-item w3-button'
              onClick={window.location.reload}
            >
              <i className='fa fa-heart'></i> SUPPORT
            </Link>
            <Link
              to='/login'
              className='w3-bar-item w3-button'
              onClick={window.location.reload}
            >
              <i className='fa fa-th'></i> LOGIN
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
