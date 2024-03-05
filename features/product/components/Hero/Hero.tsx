import React, { useState } from 'react';

import Image from 'next/image';

export const Hero = () => {
  return (
    <>
      <section className="h-100vh flex flex-col text-white ">
        <div className="relative">
          <img src="/icons/svg/hero.svg" alt="hero" className="w-full"></img>
        </div>
        <div className="absolute px-4 mt-12  md:mt-24 lg:mt-48 lg:pr-48 lg:pl-80">
          <div className="mb-4">
            <h1 className="text-[15px] md:text-[26px] lg:text-[34px] lg:mb-4">Easy to Use, Audit Ready Compliance Software</h1>
            <h3 className="text-[10px] md:text-[12px] lg:text-[16px] lg:w-[500px] lg:mb-4" >
              Meet the constantly changing requirements of the regularity landscape with a custom tailored, all in one
              compliance platform.
            </h3>
          </div>
          <div className="flex justify-center bg-[white] text-blue-600 rounded w-[150px] h-[32px] lg:w-[184px] lg:h-[50px]">
            <button type="button" className="text-sm font-bold px=[16px]">
              Schedule Free Demo
            </button>
          </div>
        </div>
      </section>


    </>
  );
};
