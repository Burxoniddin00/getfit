import getfitLogo from "@/img/getfit_logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Headers = () => {
  return (
    <header className="w-full absolute h-8">
      <div className=" mx-auto  h-[55px]  py-2 px-8  bg-custom-oklab  backdrop-filter backdrop-brightness-110 ">
        <div className="container flex items-center justify-end">
        <a
          href="#"
          className= " bg-neutral-600 text-sm text-white py-1 px-4 rounded-full hover:bg-gray-700 transition duration-200 flex items-center gap-2"
        >
          Telefon qilish
          <FaArrowRightLong siz={20} />
        </a>
        </div>
      </div>
      <div>
        <Link
          href="/"
          className=" containerz-50 left-4 sm:left-10 md:left-20 lg:left-32 xl:left-52 cursor-pointer flex items-center gap-2 fixed top-2 "
        >
          <Image src={getfitLogo} alt="GetFit Logo" width={50} height={50} />
          <h1 className="text-xl font-bold text-white">GetFit</h1>
        </Link>
      </div>
    </header>
  );
};

export default Headers;
