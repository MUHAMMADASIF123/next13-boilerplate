import React, { memo } from 'react';

const Footer = () => {
  return (
    <div className="py-4 text-center bg-custom-gradient text-[12px] text-white font-bold">
      <span>Powered by VINLogx</span>
    </div>
  );
};

export default memo(Footer);
