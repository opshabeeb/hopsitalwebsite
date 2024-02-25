import React from 'react'
import Header from './components/header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Features from './pages/features/Features';
import Doctors from './pages/doctors/Doctors';
import Appoinment from './pages/appoinment/Appoinment';
import Contact from './pages/contact/Contact';
import LayoutRoutes from './LayoutRoutes';

function App() {
  return (
    <div>
      <LayoutRoutes/>
    </div>
  )
}

export default App