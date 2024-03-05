import React, { useState } from 'react';


export const Meeting = () => {
  return (
    <>
    

      <section className="mt-8 container flex justify-center flex-col items-center ">
        <div className="logo">
          <img src="/icons/svg/logo.svg" alt="hero"></img>
        </div>
        <div className="mt-8 text-center">
          <p className='text-18px md:w-[530px]'>
            Meet the constantly changing requirements of the regularity landscape with a custom tailored, all in one compliance
            platform.
          </p>
        </div>
        <div className="flex mt-8 mb-8">
          <div>
            <button
              className="w-[120px] bg-gradient-to-r from-sky-300 to-indigo-600 h-[50px] rounded text-white"
              type="button"
            >
              Client Login
            </button>
          </div>
        </div>
      
      </section> 
      <div>
        <div className='mx-4'>

      <hr className="container h-1   bg-gray-500 "/>
        </div>
      </div>
    </>
  );
};
