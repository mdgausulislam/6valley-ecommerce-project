import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function Layout() {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet /> {/* This is where nested routes will render */}
      <Footer />
    </div>
  );
}

export default Layout;
