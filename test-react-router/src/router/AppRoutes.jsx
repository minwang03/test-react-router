import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import ContactInfo from '../components/ContactInfo';
import ContactSupport from '../components/ContactSupport';
import ProductInfo from '../components/ProductInfo';
import NotFound from '../components/NotFound';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path='/' element={<Navigate to="home" replace />} /> {/* Navigate route */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />}>
            {/* Các route con của Contact */}
            <Route path="info" element={<ContactInfo />} />
            <Route path="support" element={<ContactSupport />} />
          </Route>   
          <Route path="product/:productId" element={<ProductInfo />} /> {/* Dynamic route */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
