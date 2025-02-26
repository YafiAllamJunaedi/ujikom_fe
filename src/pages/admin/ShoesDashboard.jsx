import { useEffect, useState } from "react";
import { getAllShoes, addShoes, deleteShoes } from "../../services/ShoesService.js";
import LeftSide from "../../components/LeftSide.jsx";
import Info from "../../components/Info.jsx";
import { PiSneakerLight } from "react-icons/pi";
import { IoAnalyticsOutline } from "react-icons/io5";
import ShoesData from "../../components/ShoesData.jsx";
import Modal from "../../components/Modal.jsx";

const ShoesDashboard = () => {
  const [shoes, setShoes] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: "",
    image: "",
    stock: ""
  });

  const fetchShoes = async () => {
    try {
      const data = await getAllShoes();
      setShoes(data);
    } catch (error) {
      console.error("Error fetching shoes", error);
    }
  };
  useEffect(() => {
    fetchShoes();
  }, []);
  function handleOnChange(e) {
    const { name, value } = e.target;
    setData((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addShoes(data)
      fetchShoes();
      setOpenForm(false);
      setData({ image: "", name: "", stock: ""});
    } catch (error) {
      console.error("Error adding room", error);
    }
  };
  const handleDeleteMember = async (id) => {
    try {
      await deleteShoes(id);
      fetchShoes();
    } catch (error) {
      console.error("Error deleting Shoes", error);
    }
  };
  return (
    <div className="w-full min-h-screen flex bg-[#EEEEEE]">
      <LeftSide />
      <div className="w-4/5 h-full flex flex-col p-12">
        <p className="font-bold text-3xl">Shoes Management</p>
        <div className="w-full flex gap-x-7 mt-10">
          <Info
            width="w-1/5"
            title="Total Shoes"
            number={shoes.length}
            logo={
              <PiSneakerLight className="border-2 border-[#31363F] rounded-full size-8 p-1" />
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

        <div className="w-full mt-20">
          <div className="w-full flex justify-end">
            <div
              onClick={() => setOpenForm(!openForm)}
              className="px-3 h-10 flex items-center border-2 justify-center cursor-pointer rounded-xl"
            >
              <p className="text-sm mr-3">Add Shoes</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
        </div>
        {openForm && (
          <Modal
            onClose={() => setOpenForm(false)}
            onChange={handleOnChange}
            value1={data.name}
            value2={data.price}
            value3={data.image}
            value4={data.stock}
            handleSubmit={handleSubmit}
          />
        )}

        <div className="w-full bg-white rounded-xl mt-8 p-7">
          <div className="w-full h-6 bg-neutral-200 rounded-md flex justify-between items-center gap-x-10">
            <div className="w-full flex">
              <div className="w-3/6">
                <p className="font-semibold text-sm text-center">PRODUCT</p>
              </div>
              <div className="w-2/6 flex justify-center ml-14">
                <p className="font-semibold text-sm">STOCK</p>
              </div>
            </div>
            <div className="w-2/6 text-center">
              <p className="font-semibold text-sm">ACTION</p>
            </div>
          </div>
          {shoes.map((item, index) => (
            <ShoesData
              key={index}
              image={item.image}
              name={item.name}
              stock={item.stock}
              click={() => handleDeleteMember(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoesDashboard;
