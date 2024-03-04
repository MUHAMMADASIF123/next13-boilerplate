import React, { useState } from 'react';

import Image from 'next/image';

export const Hero = () => {
  return (
    <>
      <section className="h-100vh flex flex-col text-white ">
        <div className="relative">
          <img src="/icons/svg/hero.svg" alt="hero" className="w-full"></img>
        </div>
        <div className="absolute px-48 pt-64">
          <div className="mb-12">
            <h1 className="text-[48px] font-['Avenir LT Std']">Easy to Use, Audit Ready Compliance Software</h1>
            <h3 className="text-[20px] font-['Avenir LT Std'] w-[670px]">
              Meet the constantly changing requirements of the regularity landscape with a custom tailored, all in one
              compliance platform.
            </h3>
          </div>
          <div className="w-[195px] h-[50px] flex justify-center bg-[white] text-blue-600 rounded text-[14px]  ">
            <button type="button" className="text-lg font-bold px=[16px]">
              Schedule Free Demo
            </button>
          </div>
        </div>
      </section>


    </>
  );
};
