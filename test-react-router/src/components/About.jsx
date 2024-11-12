import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div>
      <Navbar />
      <h1>Giới Thiệu</h1>
      <p>Đây là trang giới thiệu.</p>
      <NavLink to="/contact" activeClassName="active">Liên Hệ</NavLink>
    </div>
  );
}
export default About;
