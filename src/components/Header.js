import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../components/Header.css";

function Header() {
  return (
    <header>
      <nav>
        <div className='logo'>
          <Link to='/'>
            <img
              src='https://static.tvmaze.com/images/tvm-header-logo.png'
              alt=''
            />
          </Link>
        </div>
        <div className='searchBox'>
          <input type='text' placeholder='Search...' />
          <button>
            <BiSearch />
          </button>
        </div>

        <div className='register'>
          <Link to='/'>
            <button className='btn'>Login</button>
          </Link>
          <Link to='/'>
            <button className='btn'>Register</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
