import { Link,NavLink, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <div>
      <Navbar />
      <h1>Trang Liên Hệ</h1>
      <p>Đây là trang liên hệ.</p>
      <div><Link to="info">Thông tin liên hệ</Link></div>
      <div><NavLink to="support" >Hỗ Trợ</NavLink></div>
      <div><Link to="form">Gửi Thắc Mắc</Link></div>
      <Outlet />
    </div>
  );
}
export default Contact;
