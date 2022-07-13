import React from 'react';

const NavBar = () => {
  return (
    <div className="navi">
      <a href="#" id="logo">
        <img src="https://i.postimg.cc/C5FbwsQr/logo.png" height="20" />
      </a>
      <ul id="menu">
        <li><a href="#">Contact</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Cart</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </div>
  )
}

export default NavBar