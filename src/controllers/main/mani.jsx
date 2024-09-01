"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import preview from "@/img/preview.png";
import im from "@/img/get.jpg";
import im2 from "@/img/get2.jpg";
import VideoPlayer from "../vidyo/vidyo";
import MasteraCard from "../masterCard/masteraCard";
import Swager from "../swager/swager";
import ClentCard from "../clentCard/clentCard";
const Mani = () => {
  let data = [
    {
      imgLink: preview,
      titel: "Ayollar va Erkaklar uchun mashg’ulotlar",
    },
    {
      imgLink: preview,
      titel: "Tajribasizlar va Tajribalilar uchun",
    },
    {
      imgLink: preview,
      titel: "Samaradorlik bilan tana muskul va relief darajasini oshirish",
    },
    {
      imgLink: preview,
      titel: "Ayollar va Erkaklar uchun mashg’ulotlar",
    },
    {
      imgLink: preview,
      titel: "Tajribasizlar va Tajribalilar uchun",
    },
    {
      imgLink: preview,
      titel: "Samaradorlik bilan tana muskul va relief darajasini oshirish",
    },
  ];

  return (
    <div className="w-[80%] mx-auto z-50">
      <main>
        <section>
          <div className="pt-24 group text-center  w-[300px] lg:w-[450px] max-w-lg mx-auto">
            <h2 className="text-[#111633] lg:leading-loose text-lg font-extrabold  lg:text-xl mb-[65px]">
              GetFit platformasi bilan quyidagilarga erishing
            </h2>
          </div>
          <ul className="grid grid-cols-1 px-5 sm:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto ">
            {data.map((e, i) => (
              <li
                key={i}
                className="cursor-pointer group justify-center flex items-center gap-5"
              >
                <Image
                  className="rounded-full bg-neutral-200 group-hover:bg-[#b9d104]"
                  width={80}
                  height={80}
                  src={e.imgLink}
                  alt="preview"
                />
                <p className="text-gray-900 font-roboto text-sm font-semibold">
                  {e.titel}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <ul className="grid grid-cols-4 items-center gap-5  mt-8 max-lg:grid-cols-1">
            <li>
              <Image src={im} alt="im" />
            </li>
            <li>
              <Image src={im2} alt="im" />
            </li>
            <li>
              <Image src={im} alt="im" />
            </li>
            <li>
              <Image src={im} alt="im" />
            </li>
            <li>
              <Image src={im2} alt="im" />
            </li>
            <li>
              <Image src={im} alt="im" />
            </li>
            <li>
              <Image src={im2} alt="im" />
            </li>
          </ul>
        </section>
        <section>
          <div className="pt-24 group text-center pb w-[300px] lg:w-[450px] max-w-lg mx-auto">
            <h2 className="text-[#111633] lg:leading-loose text-2xl font-black  lg:text-4xl mb-[65px]">
              Kurs mualliflardan videolavhalar
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
            <VideoPlayer />
            <VideoPlayer />
          </div>
        </section>
        <section className="mt-24 ">
          <h1 className="text-[#111633] lg:leading-loose text-2xl font-black  lg:text-4xl mb-[65px] text-center">
            KURS MUALLIFLARI
          </h1>
          <div className="grid gap-8  max-w-5xl w-full px-4  grid-cols-2 max-lg:grid-cols-1">
            <MasteraCard />
            <MasteraCard />
            <MasteraCard />
          </div>
        </section>
        <section>
          <Swager />
        </section>
        <section>
          <ClentCard />
        </section>
     
      </main>
    </div>
  );
};

export default Mani;
