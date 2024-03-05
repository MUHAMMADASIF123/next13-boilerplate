import React, { useState } from 'react';

const cardsData = [
  {
    icon: "/icons/svg/card1.svg",
    title: "Accurate",
    description: "Eliminate the manual tasks that lead to errors and potential risk."
  },
  {
    icon: "/icons/svg/card2.svg",
    title: "Efficient",
    description: "Streamline essential compliance workflows with our 1-click technology."
  },
  {
    icon: "/icons/svg/card3.svg",
    title: "Simplified",
    description: "Be prepared in minutes, not days when a surprise audit shows up at your front door."
  }
];
export const Card = () => {
  return (
    <div className='bg-[#F4F5F6] '>
      <section className="container mt-8 py-[18px] ">
        <div className="flex justify-center flex-col items-center mt-8 px-4 ">
          <div className='flex justify-center items-center'>
          <h1 className="text-[32px] text-[#3A6FB6] text-center ">The Triple Pillars of Secure RIA</h1>
          </div>
          <div className="flex justify-center">
            <p className=" mt-8 mb-8  text-center px-4">
              SecureRIA provide a suite of automated tools and intuitive technology designed to ease the burden of SEC
              compliance. The 3 goal we have for our clients are simple, yet powerful.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 bg-gray-100 p-4 ">
  {cardsData.map((card, index) => (
    <div key={index} className="flex flex-col justify-between items-center bg-white rounded-lg shadow p-8">
      <img src={card.icon} alt="" className="mb-2" />
      <h1 className="text-lg font-semibold mb-2">{card.title}</h1>
      <p className="text-sm text-gray-600">
        {card.description}
      </p>
    </div>
  ))}
</div>




        <div className="flex justify-center mt-8 mr-4 md:justify-end">
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
