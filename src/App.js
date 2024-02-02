import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from "./pages/Team";
import Service1 from "./pages/Service1";
import Service2 from "./pages/Service2";
import Service3 from "./pages/Service3";
import Service4 from "./pages/Service4";
import Service5 from "./pages/Service5";
import Service6 from "./pages/Service6";
import Service7 from "./pages/Service7";
import Service8 from "./pages/Service8";
import Service9 from "./pages/Service9";
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppContact from './components/WhatsappContact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route
            path="/about/corporate-secretarial-fema"
            element={<Service1 />}
          />
          <Route path="/about/india-entry-services" element={<Service2 />} />
          <Route
            path="/about/direct-indirect-taxation"
            element={<Service3 />}
          />
          <Route
            path="/about/intellectual-property-rights"
            element={<Service4 />}
          />
          <Route
            path="/about/secretarial-corporate-legal-compliances"
            element={<Service5 />}
          />
          <Route
            path="/about/foreign-direct-investment"
            element={<Service6 />}
          />
          <Route path="/about/virtual-cfo-services/" element={<Service7 />} />
          <Route
            path="/about/international-advisory/"
            element={<Service8 />}
          />
          <Route
            path="/about/merger-and-amalgamation/"
            element={<Service9 />}
          />
        </Routes>
      </BrowserRouter>
      <WhatsAppContact />
      <Footer />
    </>
  );
}

export default App;