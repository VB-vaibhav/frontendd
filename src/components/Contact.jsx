import React from 'react'
import { Link } from "react-router-dom";
import Banner3 from '../components/Banner3';
function Contact() {
  
    return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <div className=" mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Welcome Coder{" "}
            <span className="text-pink-500"> Here!</span>
          </h1>
          <p className="mt-12">
            Feel free to send us your Complains, Suggestions and Good wishes too!! 
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
           </Link>
           <Banner3/>
           
          
          {/* <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
          </button> */}
        </div>
    </div>
    </>
  )
}

export default Contact
