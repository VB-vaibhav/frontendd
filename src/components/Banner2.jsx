import React from "react";
import hrvideo from "../assets/hero.mp4";
function Banner2() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white bg-black max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="backgif w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-blue-200 text-2xl md:text-4xl font-bold">
            Get Your Own Content{" "}
              <span className="text-pink-500">Publish</span>
            </h1>
            <p className="text-red-200 text-sm md:text-xl">
            This Platform contains all the necessary resources needed by a person to make a strong grip on various coding concepts. But we believe that there is always a scope of improvement.  If the content is found good and valuable, we will publish your data on our website.
            </p>
            
          </div>
          <a href='/publish'><button className="btn mt-6 btn-secondary">Publish</button></a>
        </div>
        <div className=" order-1  w-full border-radius-2px my-12 mt-20 md:w-1/2">
        <video id="mygif" src={hrvideo} autoPlay loop muted/>
          {/* <img
            src={hrvideo}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          /> */}
        </div>
      </div>
    </>
  );
}

export default Banner2;
