import React, { useState } from 'react';

import Image from 'next/image';

export const Tour = () => {
  return (
    <>
     

      <section className="flex mt-8 container">
      
        <div className="w-[50%] aspect-video">
          <iframe
            className=" h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528"
            width="100%"
            title="YouTube video player"
           
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            
          ></iframe>
        </div>

        <div className="w-[50%] pl-[12px] flex flex-col pl-[70px]">
          <div className="mb-[10px]">
            <h1 className="font-bold text-4xl text-[#3A6FB6] mb-[10px] ">Video Tour of our Mock SEC Exam Tool</h1>
            <p className="mb-[10px]">
              Take a virtual tour of one of the most important elements in your preparation for the real SEC exam. This Mock SEC
              Audit Tool walks you through the 5 stages during an actual audit, providing you a simple step-by-step to do list
              that’s easy to follow and implement.
              Watch the 3-minute video to see how this tool can help you avoid deficiencies and have a successful SEC
              Examination.
            </p>
           
              
           
            <span className="font-bold text-2xl text-black-800 mb-[10px]">
              Watch the 3-minute video to see how this tool can help you avoid deficiencies and have a successful SEC
              Examination.
            </span>
          </div>
          <div
            className="w-[137px]
h-[50px]
rounded
bg-gradient-to-r from-sky-300 to-indigo-600

flex justify-center
text-white
"
          >
            <button>Take the Tour</button>
          </div>
        </div>
      </section>

    </>
  );
};
