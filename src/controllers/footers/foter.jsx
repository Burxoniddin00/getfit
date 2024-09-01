import React from "react";

const Footer = () => {
  const date = new Date()
  return (
    <div className="container mx-auto"> 
      <div className=" h-10 md:w-full">
        <p className="text-white w-full">© {date.getFullYear()} barcha huquqlar himoyalangan</p>
      </div>
    </div>
  );
};

export default Footer;
