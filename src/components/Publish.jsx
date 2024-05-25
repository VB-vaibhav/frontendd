import React from 'react'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
// CSS FILE LINK
// import "../App.css"
function Publish() {
  return (
    <section className=" w-screen h-screen flex items-center justify-center flex-col text-center	
     mx-auto sm:block md:mt-28 ml-28 px-0 py-4">
      <div className="  absolute flex m-25 flex-col items-center text-center ">
        <h1 className=' text-4xl my-4 uppercase'>We are almost </h1>
        <h3 className='font-light  mb-12'>Stay tuned for something amazing.</h3>
        <FlipClockCountdown
          className='flip-clock'
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
        
      </div>
    </section>
  )
}

export default Publish
