import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <Navbar />
      <h1>Giới Thiệu</h1>
      <p>Đây là trang giới thiệu.</p>
      <Link to="/contact" >Liên Hệ</Link>
    </div>
  );
}
export default About;
