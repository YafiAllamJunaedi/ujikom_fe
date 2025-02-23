import { useState } from "react";
import LeftSide from "../../components/LeftSide.jsx";
import Info from "../../components/Info.jsx";
import { PiSneakerLight } from "react-icons/pi";
import { GrTransaction } from "react-icons/gr";
import { IoAnalyticsOutline } from "react-icons/io5";
import ShoesData from "../../components/ShoesData.jsx";

const TransactionDashboard = () => {
  return (
    <div className="w-full flex bg-[#EEEEEE]">
      <LeftSide />
      <div className="w-4/5 h-full flex flex-col p-12 ">
        <p className="font-bold text-3xl">Transaction History</p>
        <div className="w-full flex gap-x-7 mt-10">
          <Info
            width="w-1/5"
            title="Total Shoes"
            logo={
              <PiSneakerLight className="border-2 border-[#31363F] rounded-full size-8 p-1" />
            }
          />
          <Info
            width="w-52"
            title="Total Transaction"
            number="5"
            logo={
              <GrTransaction className="border-2 border-[#31363F] rounded-full size-8 p-2" />
            }
          />
          <Info
            width="w-2/6"
            title="Company Target Completed"
            number="15%"
            logo={
              <IoAnalyticsOutline className="border-2 border-[#31363F] rounded-full size-8 p-1" />
            }
          />
        </div>

        <div className="w-full bg-white rounded-xl mt-8 p-7">
          <div className="w-full h-6 bg-neutral-200 rounded-md flex justify-between items-center pl-9">
            <div className="w-1/6 flex justify-center">
              <p className="font-semibold text-sm">ORDER</p>
            </div>
            <div className="w-1/6 flex justify-center">
              <p className="font-semibold text-sm">CUSTOMER</p>
            </div>
            <div className="w-1/6 flex justify-center">
              <p className="font-semibold text-sm">DATE</p>
            </div>
            <div className="w-1/6 flex justify-center">
              <p className="font-semibold text-sm">ITEMS</p>
            </div>
            <div className="w-1/6 flex justify-center">
              <p className="font-semibold text-sm">TOTAL</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TransactionDashboard;
