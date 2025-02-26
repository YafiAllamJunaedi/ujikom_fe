import { useState, useEffect } from "react";
import { getAllTransaction } from "../../services/TransactionService.js";
import { formatCurrency } from "../../additional/Currency.js";
import LeftSide from "../../components/LeftSide.jsx";
import Info from "../../components/Info.jsx";
import { PiSneakerLight } from "react-icons/pi";
import { GrTransaction } from "react-icons/gr";
import { IoAnalyticsOutline } from "react-icons/io5";
import TransactionData from "../../components/TransactionData.jsx";


const TransactionDashboard = () => {
  const [data, setData] = useState([]);

  const fetchTransaction = async () => {
    try {
      const data = await getAllTransaction();
      setData(data);
    } catch (error) {
      console.error("error fetching transaction", error)
    }
  };
  useEffect(() => {
    fetchTransaction()
  }, [])
  function TrimmedText(text, maxLength = 100) {
    if (text.length <= maxLength) return text;
    let trimmedText = text.substring(0, maxLength);
    return trimmedText.substring(0, trimmedText.lastIndexOf(" ")) + "...";
  }

  return (
    <div className="w-full flex bg-[#EEEEEE]">
      <LeftSide />
      <div className="w-4/5 h-full flex flex-col p-12 ">
        <p className="font-bold text-3xl">Transaction History</p>
        <div className="w-full flex gap-x-7 mt-10">
          <Info
            width="w-52"
            title="Total Transaction"
            number={data.length}
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
            {data?.map((item, index) => (
              <TransactionData
                key={index}
                image={item.Sho.image}
                title={TrimmedText(item.Sho.name, 22)}
                name={item.User.name}
                date={item.Date}
                quantity={item.quantity}
                total={formatCurrency(item.total)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionDashboard;
