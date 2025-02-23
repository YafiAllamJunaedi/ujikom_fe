import Sidebar from "./Sidebar.jsx";
import { PiSneakerMoveLight } from "react-icons/pi";
import { PiSneaker } from "react-icons/pi";
import { MdHistory } from "react-icons/md";

const LeftSide = () => {
  return (
    <div className="w-1/5 min-h-screen bg-[#222831] flex flex-col border-l-0 border-t-0 border-b-0 border-r-2 border-slate-200">
      <div className="w-full h-28 text-center flex items-center justify-center gap-x-4">
        <PiSneakerMoveLight className="size-9 text-white"/>
        <p className="text-lg font-bold text-white">SNEAKER RIOT</p>
      </div>
      <div className="flex h-12 items-center">
        <p className="text-white font-semibold ml-10">Dashboard</p>
      </div>
      <div className="w-full h-3/5 flex flex-col mt-5">
        <div className="w-full flex flex-col items-center gap-y-7  ">
          <Sidebar
            title="Shoes"
            logo={<PiSneaker className="size-5" />}
            link="/shoes"
          />
          <Sidebar
            title="Transaction"
            logo={<MdHistory className="size-5" />}
            link="/transaction"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
