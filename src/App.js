import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

// import components
import Header from './components/layout/Header';
import Hero from './components/pages/Hero';
import About from './components/pages/About';
import HomeBooks from './components/pages/HomeBooks';
import BookShelf from './components/pages/BookShelf';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import BackTopBtn from './components/content/BackTopBtn';

const App = () => {

  return (

    <div>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Hero />} > </Route>
            <Route path="/About" element={<About />} > </Route>
            <Route path="/HomeBooks" element={<HomeBooks />} > </Route>
            <Route path="/BookShelf" element={<BookShelf />} > </Route>
            <Route path="/Contact" element={<Contact />} > </Route>
            </Routes>
          <Footer/>
          <BackTopBtn />
        </Router>
      </div>
  );
};

export default App;
