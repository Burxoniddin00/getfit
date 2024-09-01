import Image from "next/image";
import React from "react";
import mm from "@/img/mm.jpg";

const MasteraCard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-start bg-white rounded-lg shadow-md p-6 space-x-4">
        <Image
          src={mm}
          alt="Djilsova Alexsandra"
          className="w-32 h-32 rounded-lg object-cover"
        />
        <div>
          <h2 className="text-xl font-bold mb-2">Bahromjon Boymirzayev</h2>
          <p className="text-sm text-gray-600">
            WBPF World chempion NABBA Asian Overall winner IFBB Central Asian
            Overall winner 12 yillik tajribaga ega
          </p>
        </div>
      </div>
    </div>
  );
};

export default MasteraCard;
