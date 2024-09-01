import React from "react";

const ClentCard = () => {
  return (
    <div>
      <h1 className="text-[#111633] lg:leading-loose text-2xl font-black mt-20 mx-auto lg:text-3xl  mb-[65px] text-center">
        Kursimizni harid qilgan Mijozlarimizning natijalari
      </h1>
      <div className="grid grid-cols-2 gap-5 items-center max-lg:grid-cols-1">
        <video
          className="w-full rounded-lg shadow-lg relative"
          controls
          controlsList="nodownload"
          loop
        >
          <source
            src="https://getfit.uz/wp-content/uploads/2024/08/IMG_2930.mp4"
            type="video/mp4"
          />
          Sizning brauzeringiz video tegini qo'llab-quvvatlamaydi.
        </video>
        <video
          className="w-full rounded-lg shadow-lg relative"
          controls
          controlsList="nodownload"
          loop
        >
          <source
            src="https://getfit.uz/wp-content/uploads/2024/08/IMG_2930.mp4"
            type="video/mp4"
          />
          Sizning brauzeringiz video tegini qo'llab-quvvatlamaydi.
        </video>
      </div>
    </div>
  );
};

export default ClentCard;
