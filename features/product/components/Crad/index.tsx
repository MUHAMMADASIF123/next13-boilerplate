import React, { useState } from 'react';

import Image from 'next/image';

export const Card = () => {
  return (
    <div className='bg-[#F4F5F6] '>
      

     
      <section className="container mt-8 py-[18px]">
        <div className="flex justify-center flex-col items-center mt-8 ">
          <h1 className="text-[32px] text-[#3A6FB6] ">The Triple Pillars of Secure RIA</h1>
          <div className="flex justify-center">
            <p className=" mt-8 mb-8 w-[800px] text-center">
              SecureRIA provide a suite of automated tools and intuitive technology designed to ease the burden of SEC
              compliance. The 3 goal we have for our clients are simple, yet powerful.
            </p>
          </div>
        </div>
        <div className="flex  justify-between items-center ">
          <div className="">
            <img className="rounded-t-lg" src="/icons/svg/card1.png" alt="" />
          </div>
          <div className="  ">
            <img className="rounded-t-lg" src="/icons/svg/card2.png" alt="" />
          </div>
          <div className="">
            <img className="rounded-t-lg" src="/icons/svg/card3.png" alt="" />
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <div
            className="w-[165px]
h-[50px]
rounded
bg-gradient-to-r from-sky-300 to-indigo-600
flex justify-center
text-white
"
          >
            <button className="btn btn-primay" type="button">
              Schedule Free Demo
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
};
