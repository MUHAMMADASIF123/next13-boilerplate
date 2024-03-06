import React, { memo } from 'react';

const Footer = () => {
  return (
    <div className="py-4 text-center bg-[#FFEFF0] text-[12px] lg:block hidden  h-[50px] px-4">
      <div className="flex justify-between items-center px-4">
        <div className="flex px-4 justify-center items-center ">
          <span className="text-black text-[18px]">© 2024 </span>
          <span className="ml-2 text-[#991D20] underline italic text-[18px]">Vinlogx</span>
        </div>
        <div className="px-4">
          <ul className="flex items-center gap-8 text-[20px] bold italic ">
            <li>
              <a href="" target="_blank" rel="noreferrer">
                About Us
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noreferrer">
                Blog
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noreferrer">
                License
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
