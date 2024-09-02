"use client";
import React from "react";
import "./mainBg.css";
import Image from "next/image";
import { IoPerson } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { useEffect } from "react";
import dd from "@/img/getfit.png";
import Link from "next/link";

const MainBg = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const parallaxBackground = document.querySelector(".parallax-container");
      const scrolled = window.scrollY;

      parallaxBackground.style.transform = `translateY(${scrolled * 0.7}px)`;
    });
  }, []);
  return (
    <div>
      <div className="parallax-container relative -z-30">
        <div className="content relative  parallax-background">
          <div className=" relative w-full">
            <Image
              src={dd}
              height={800}
              alt="dd"
              className="max-sm:h-[350px] object-fill w-full h-[600px]"
            />
          </div>
        </div>
      </div>
          <div className="headers_div container mx-auto absolute flex flex-col justify-center top-[20%]">
            <div className=" md:pl-20 max-lg:mx-auto">
              <h1 className="text-3xl  md:text-6xl font-black text-white mb-8 md:mb-16">
                GetFit Platformasi
              </h1>
              <div className="absolute ">
                <button className="bg-[#b9d104] cursor-pointer md:text-base text-xs hover:text-white py-4 px-8 md:py-6 md:px-16 flex items-center justify-center gap-5 rounded-full text-white group">
                  <div className="text-black group-hover:text-white cursor-pointer">
                    <FaShoppingBasket size={20} />
                  </div>
                  KURSNI SOTIB OLISH
                </button>
                <Link
                  href="/login"
                  className="mt-3 md:mt-5 cursor-pointer md:text-base text-xs bg-[#b9d104] hover:text-white py-4 px-8 md:py-6 md:px-16 flex items-center justify-center gap-5 rounded-full text-white group"
                >
                  <div className="text-black group-hover:text-white cursor-pointer">
                    <IoPerson size={20} />
                  </div>
                  PROFILE
                </Link>
              </div>
            </div>
          </div>
    </div>
  );
};

export default MainBg;
