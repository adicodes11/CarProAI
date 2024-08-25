import React from 'react';
import Navbar from '../components/Navbar';
import Service from '../components/Service';
import Footer from '../components/Footer';

function Services() {
  return (
    <>
        <Navbar />
        <div className="min-h-screen">
            <Service />
        </div>
        <Footer />
    </>
  );
}

export default Services;