import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import ContactInfo from '../components/ContactInfo';
import ContactSupport from '../components/ContactSupport';
import NotFound from '../components/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact" element={<Contact />}>
            {/* Các route con của Contact */}
            <Route path="info" element={<ContactInfo />} />
            <Route path="support" element={<ContactSupport />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
