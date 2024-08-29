"use client";
import React from "react";
import "./mainBg.css";
import Image from "next/image";
import getfit_logo from "@/img/getfit_logo.png";
import { IoPerson } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { useEffect } from "react";

const MainBg = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxBackground = document.querySelector(".parallax-background");
      const scrolled = window.scrollY;
      if (parallaxBackground) {
        parallaxBackground.style.transform = `translateY(${scrolled * 0.5}px)`; // Scroll bilan fon tasvirini harakatlantirish
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="parallax-container relative ">
        <div className="parallax-background"></div>
        <div className="content relative z-10 flex flex-col items-center justify-center h-screen">
          <div className="headers_div container mx-auto">
            <div className="fixed z-50 left-4 sm:left-10 md:left-20 lg:left-32 xl:left-52 cursor-pointer flex items-center gap-2 top-4">
              <Image
                width={60}
                height={60}
                src={getfit_logo}
                alt="getfit_logo"
              />
              <h3 className="text-white text-xl font-bold">GetFit</h3>
            </div>
            <div className="text-center md:pl-20 max-lg:mx-auto">
              <h1 className="text-3xl md:text-6xl font-black text-white mb-8 md:mb-16">
                GetFit Platformasi
              </h1>
              <div className="absolute ">
                <button className="bg-[#b9d104] md:text-base text-xs hover:text-white py-4 px-8 md:py-6 md:px-16 flex items-center justify-center gap-5 rounded-full text-white group">
                  <div className="text-black group-hover:text-white">
                    <FaShoppingBasket size={20} />
                  </div>
                  KURSNI SOTIB OLISH
                </button>
                <button className="mt-3 md:mt-5 md:text-base text-xs bg-[#b9d104] hover:text-white py-4 px-8 md:py-6 md:px-16 flex items-center justify-center gap-5 rounded-full text-white group">
                  <div className="text-black group-hover:text-white">
                    <IoPerson size={20} />
                  </div>
                  PROFILE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBg;
