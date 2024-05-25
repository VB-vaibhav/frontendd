import React from 'react'
import BGVideo from '../assets/back.mp4'
function Banner(){
return(
  <div className='video-container'>
    <video id="myVideo" className='object-cover absolute justify-center h-screen w-full' src={BGVideo} autoPlay loop muted/> 
    <div className='absolute h-screen w-full justify-center items-center flex'>
      <p className='text-6xl font-serif text-white'><center> Never stop <b>LEARNING</b> <br/> Because life never stops <b>TEACHING!!</b></center></p>
      
    </div>
    <div >
    <button className="dark:text-black homebutton cursor-pointer">Explore!!!!</button>
    </div>
  </div>
)
}
export default Banner;