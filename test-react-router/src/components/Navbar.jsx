import {  NavLink } from 'react-router-dom'; 
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home" className="active-navbar-home">Trang Chủ</NavLink>
        </li>
        <li>
          <NavLink to="/about"  className="active-navbar-about">Giới Thiệu</NavLink>
        </li>
        <li>
          <NavLink to="/contact"  className="active-navbar-contact">Liên Hệ</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
