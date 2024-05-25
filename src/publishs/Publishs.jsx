import React from 'react'
import Navbar from "../components/Navbar";
import Publish from "../components/Publish";
import Footer from "../components/Footer";
function Publishs() {
  return (
    <>
    <Navbar />
    <div className=" min-h-screen">
        <Publish />
    </div>        
    <Footer />
    </>
  )
}

export default Publishs
