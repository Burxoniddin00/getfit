import MainBg from "@/controllers/main/mainBg/mainBg";
import Mani from "@/controllers/main/mani";

export default function Home() {
  return (
    <>
    <div className="container mx-auto">
      <MainBg />
      <div className="bg-white ">
        <Mani />
      </div>
    </div>
    </>
  );
}
