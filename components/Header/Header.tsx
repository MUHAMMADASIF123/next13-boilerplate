import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
export const Header = () => {
  const [navbar, setNavbar] = useState(false);


  
  return (
    <div className="bg-gray-700 text-white h-[80px] bg-custom-gradient flex justify-center lg:justify-end items-center px-4  items-center">
      <div className="flex justify-end items-center ">
        <div>
          <Image src="/icons/svg/avator.png" width={70} height={70} alt="logo" />
        </div>
        <div>
          <h1 className='text-[20px]'>Andrew Gerdel</h1>
          <span>andrewgerdel@gmail.com</span>
        </div>
        <div className='flex justify-center items-center ml-4'>
          <Image src="/icons/svg/downarrow.svg" width={20} height={20} alt="logo" />
        </div>
      </div>






      
    </div>

    //     <div>

    //       <nav className="w-full bg-white-800 shadow">
    //         <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex ">
    //           <div>
    //             <div className="flex items-center justify-between py-3 md:py-5 md:block">
    //              <Image src="/icons/svg/logo.svg" width="100" height="100" alt="" />
    //               <div className="md:hidden">
    //                 <button
    //                   className="p-2 text-gray-700 rounded-md outline-none "
    //                   onClick={() => setNavbar(!navbar)}
    //                 >
    //                   {navbar ? (
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       className="w-6 h-6 text-white bg-gray-500"
    //                       viewBox="0 0 20 20"
    //                       fill="currentColor"

    //                     >
    //                       <path
    //                         fillRule="evenodd"
    //                         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //                         clipRule="evenodd"
    //                       />
    //                     </svg>
    //                   ) : (
    //                     <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                     <path d="M1.55556 15.076C2.41466 15.076 3.11111 14.1117 3.11111 12.9223C3.11111 11.7328 2.41466 10.7686 1.55556 10.7686C0.696446 10.7686 0 11.7328 0 12.9223C0 14.1117 0.696446 15.076 1.55556 15.076Z" fill="#5C6670" fill-opacity="0.8"/>
    //                     <path d="M26.5377 10.7686H7.68439C6.87683 10.7686 6.22217 11.675 6.22217 12.7931V13.0515C6.22217 14.1696 6.87683 15.076 7.68439 15.076H26.5377C27.3453 15.076 27.9999 14.1696 27.9999 13.0515V12.7931C27.9999 11.675 27.3453 10.7686 26.5377 10.7686Z" fill="#5C6670" fill-opacity="0.8"/>
    //                     <path d="M26.5378 21.5372H1.46222C0.654659 21.5372 0 22.4436 0 23.5617V23.8202C0 24.9383 0.654659 25.8447 1.46222 25.8447H26.5378C27.3453 25.8447 28 24.9383 28 23.8202V23.5617C28 22.4436 27.3453 21.5372 26.5378 21.5372Z" fill="#5C6670" fill-opacity="0.8"/>
    //                     <path d="M26.5378 0H1.46222C0.654659 0 0 0.906399 0 2.0245V2.28294C0 3.40104 0.654659 4.30744 1.46222 4.30744H26.5378C27.3453 4.30744 28 3.40104 28 2.28294V2.0245C28 0.906399 27.3453 0 26.5378 0Z" fill="#5C6670" fill-opacity="0.8"/>
    //                     </svg>
    //                   )}
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //           <div>
    //             <div
    //               className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
    //                 navbar ? 'block' : 'hidden'
    //               }`}
    //             >
    //    <ul className="items-center justify-center space-y-8 md:flex lg:space-x-12 md:space-x-6 md:space-y-0">
    //     <li className="text-black border-b-2 border-transparent hover:border-[#003165]">
    //       <Link href="/">
    //         Home
    //       </Link>
    //     </li>
    //     <li className="text-black border-b-2 border-transparent hover:border-[#003165]">
    //       <Link href="/blogs">
    //       About
    //       </Link>
    //     </li>
    //     <li className="text-black border-b-2 border-transparent hover:border-[#003165]">
    //       <Link href="/about">
    //         Products
    //       </Link>
    //     </li>
    //     <li className="text-black border-b-2 border-transparent hover:border-[#003165]">
    //       <Link href="/contact">
    //       Resources
    //       </Link>
    //     </li>
    //     <li className="text-black border-b-2 border-transparent hover:border-[#003165]">
    //       <Link href="/contact">
    //       Demo
    //       </Link>
    //     </li>
    //     <li className="text-black">
    //       <div className="w-[137px] h-[50px] rounded bg-gradient-to-r from-sky-300 to-indigo-600 flex justify-center text-white">
    //         <button>Take the Tour</button>
    //       </div>
    //     </li>
    // </ul>

    //             </div>
    //           </div>
    //         </div>
    //       </nav>
    //       {/* <div className="flex justify-center items-center mt-8">
    //         <h1 className="text-2xl font-bold text-purple-500">
    //           Create Responsive Navbar Menu in Next js with Tailwind CSS
    //         </h1>
    //       </div> */}
    //     </div>
  );
};

// export default Header;
