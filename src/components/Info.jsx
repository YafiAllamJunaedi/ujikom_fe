import { TfiLayoutGrid2 } from "react-icons/tfi";
const Info = ({ width, title, number, logo }) => {
  return (
    <div className={`${width} h-28  bg-white shadow-md rounded-xl`}>
      <div className="w-full flex justify-between p-3">
        <p className="text-md text-[#222831] font-medium">{title}</p>
        <TfiLayoutGrid2 />
      </div>
      <div className="flex p-3 gap-x-4">
        {logo}
        <h3 className="text-black text-xl font-semibold">{number}</h3>
      </div>
    </div>
  );
};

export default Info;
