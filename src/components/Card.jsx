import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const Card = ({ id, image, title, price }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setIsLoggedIn(userData !== null);
  }, []);
  return (
    <div className="h-72 border-2 border-black rounded-lg">
      <img className="b" src={image} alt="" />
      <div className="flex flex-col items-center p-4">
        <div className="w-full h-12">
          <p className="text-center">{title}</p>
        </div>
        <div className="mt-2 text-sm">
        </div>
        <p className="mt-1 text-green-600 font-semibold">{price}</p>
      </div>
      <div className="px-5 flex justify-end">
        <Link
          to={isLoggedIn ? "/checkout" : "/login"}
          state={{ id, image, title, price}}  
        >
          <IoCartOutline className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
