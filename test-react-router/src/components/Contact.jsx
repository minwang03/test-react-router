import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h1>Trang Liên Hệ</h1>
      <p>Đây là trang liên hệ.</p>
      <div><Link to="info">Thông tin liên hệ</Link></div>
      <div><Link to="support">Hỗ Trợ</Link></div>
      <div><Link to="form">Gửi Thắc Mắc</Link></div>
      <Outlet />
    </div>
  );
};

export default Contact;
