"use client";

import React, { useState } from "react";
import gsap from "gsap";

const AdvanceCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const cardHandler = () => {
    setIsOpen(!isOpen);
    gsap.to(".card", {
      width: isOpen ? "800px" : "400px",
      boxShadow: isOpen ? "0px 4px 24px #13FFAA" : "0px 2px 6px #13FFAA",
    });
  };
  return (
    // <div className="w-full h-screen flex flex-col">
      <div onClick={cardHandler} className={`card bg-gray-800 mt-16 mx-auto`}></div>
    // {/* </div> */}
  );
};

export default AdvanceCard;
{/* <div onClick={cardHandler} className={`card bg-gray-800`}></div> */}
