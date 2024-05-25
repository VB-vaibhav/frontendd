import React from 'react'
import banner from "../assets/about.jpg"

function About() {
  return (
    <>
      <div className=' dark:bg-slate-900 dark:text-white max-w-screen-2xl container bg-white mt-12 mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
          <center>
            <img src={banner} className='h-82 w-80 mt-12 md:mt-0' alt='' />
          </center>
        </div>
        <div className='w-full md:w-1/2 mt-12 md:mt-31'>
          <div className='space-y-12'>
            <h1 className=' dark:bg-slate-900 dark:text-white text-6xl font-bold text-black underline transition duration-300 ease-in-out hover:text-7xl '><center>About Us</center></h1>
            <p className='text-l  dark:bg-slate-900 dark:text-white text-black opacity-75 justify-center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci neque odit dolore consectetur! Nemo error deleniti debitis libero ab perferendis iure minima omnis quo eaque, labore eum odit reprehenderit sit fuga necessitatibus quidem, asperiores assumenda vitae eos? Hic, nostrum fugit minus eligendi sed temporibus quam explicabo quo eos incidunt modi dolor, fugiat et? Delectus suscipit, numquam molestias asperiores dolorum tempora laudantium accusantium quia corporis voluptate adipisci temporibus reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
