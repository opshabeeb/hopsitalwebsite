import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Features from './pages/features/Features'
import Appoinment from './pages/appoinment/Appoinment'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Doctors from './pages/doctors/Doctors'
import Contact from './pages/contact/Contact'

function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/features' element={<Features/>}/>
            <Route path='/doctors' element={<Doctors/>}/>
            <Route path='/appoinment' element={<Appoinment/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes