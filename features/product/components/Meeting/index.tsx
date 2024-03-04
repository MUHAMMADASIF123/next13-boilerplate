import React, { useState } from 'react';

import Image from 'next/image';

export const Meeting = () => {
  return (
    <>
    

      <section className="mt-8 container flex justify-center flex-col items-center ">
        <div className="logo">
          <img src="/icons/svg/logo.svg" alt="hero"></img>
        </div>
        <div className="mt-8 w-[500px] text-center">
          <p className='text-18px'>
            Meet the constantly changing requirements of the regularity landscape with a custom tailored, all in one compliance
            platform.
          </p>
        </div>
        <div className="flex mt-8 mb-8">
          <div>
            <button
              className="w-[120px]
          bg-gradient-to-r from-sky-300 to-indigo-600
h-[50px]
rounded
            text-white
"
              type="button"
            >
              Client Login
            </button>
          </div>
        </div>
      
      </section> 
      <div>
      <hr className="container h-1 mx-auto  bg-gray-500 "/>
      </div>
    </>
  );
};
