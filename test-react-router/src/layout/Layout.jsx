import Navbar from '../components/Navbar'; 
import { Outlet } from 'react-router-dom'; 

const Layout = () => {
  return (
    <div>
      <Navbar /> 
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
