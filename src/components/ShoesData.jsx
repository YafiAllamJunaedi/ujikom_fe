// import dummy from "/assets/shoes_collection/6.png";
import { FaRegTrashAlt } from "react-icons/fa";

const ShoesData = ({ image, name, stock, click }) => {
  return (
    <div className="w-full h-24 flex items-center justify-between p-5  mt-5 border-l-0 border-t-0 border-r-0 border-b-2 border-slate-300">
      <div className="w-full flex items-center">
        <div className="w-2/5 flex flex-col items-center">
          <img className="w-20 mb-2" src={image} alt="" />
          <p className="font-semibold text-sm">{name}</p>
        </div>
        <div className="w-2/5">
          <p className="font-semibold text-center">{stock}</p>
        </div>
      </div>
      <FaRegTrashAlt onClick={click} className="size-8 mr-12 border-2 border-black p-1 rounded-lg cursor-pointer" />
    </div>
  );
};

export default ShoesData;
