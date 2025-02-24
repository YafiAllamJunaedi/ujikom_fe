import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { formatCurrency } from "../../additional/Currency.js";
import { IoIosAdd, IoMdHome, IoIosCall } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import { FaRegSmileBeam } from "react-icons/fa";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    id,
    image,
    title,
    price = 0,
  } = state || { image: "", title: "Produk Tidak Ditemukan", price: "0" };
  const cleanPrice = parseInt(price.replace(/[^0-9]/g, "") / 100) || 0;

  const [isPaid, setIsPaid] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(cleanPrice);
  const [saldo, setSaldo] = useState(null);
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUser] = useState("");
  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem("user"));
  //   if (userData) {
  //     const userSaldo = parseInt(userData.saldo) || 0;
  //     setSaldo(userSaldo);
  //     setUser(userData.name);
  //   } else {
  //     navigate("/login");
  //   }
  //   console.log(userData);
  // }, [navigate]);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setSaldo(userData.saldo);
      setUser(userData); // Simpan seluruh data user, bukan hanya name
    } else {
      navigate("/login");
    }
    console.log(userData);
  }, [navigate]);
  
  useEffect(() => {
    setTotalPrice(cleanPrice * quantity);
  }, [quantity, cleanPrice]);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  // const handlePayment = async () => {
  //   if (saldo < totalPrice) {
  //     alert("Saldo tidak mencukupi!");
  //     return;
  //   }
  //   try {
  //     const userData = JSON.parse(localStorage.getItem("user"));
  //     const response = await axios.post(
  //       "http://localhost:3000/transaction/process",
  //       {
  //         id_user: userData.id,
  //         id_shoes: id,
  //         quantity: quantity,
  //         total: totalPrice,
  //         telephone_number: telephoneNumber,
  //         address: address,
  //         Date: new Date(),
  //       }
  //     );
  //     console.log("Transaction successful:", response.data);
  //     alert("Pembayaran Berhasil!");

  //     const updatedUser = { ...user, saldo: response.data.saldo };
  //     localStorage.setItem(
  //       "user",
  //       JSON.stringify({ ...storedUser, ...updatedUser })
  //     );

  //     alert("Transaksi berhasil!");
  //     setIsPaid(true);
  //   } catch (error) {
  //     console.error(
  //       "Transaction Error:",
  //       error.response?.data || error.message
  //     );
  //     alert(error.response?.data || "Gagal melakukan transaksi");
  //   }
  // };
  const handlePayment = async () => {
    if (saldo < totalPrice) {
      alert("Saldo tidak mencukupi!");
      return;
    }
    try {
      const userData = JSON.parse(localStorage.getItem("user"));
      console.log("User Data:", userData);
      const response = await axios.post(
        "http://localhost:3000/transaction/process",
        {
          id_user: userData.id,
          id_shoes: id,
          quantity: quantity,
          total: totalPrice,
          telephone_number: telephoneNumber,
          address: address,
          Date: new Date(),
        }
      );

      console.log("Transaction successful:", response.data);
      alert("Pembayaran Berhasil!");

      const updatedUser = { ...userData, saldo: response.data.saldo };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setSaldo(response.data.saldo);
      setIsPaid(true);
    } catch (error) {
      console.error(
        "Transaction Error:",
        error.response?.data || error.message
      );
      alert(error.response?.data || "Gagal melakukan transaksi");
    }
  };
  function TrimmedText(text, maxLength = 100) {
    if (text.length <= maxLength) return text;
    let trimmedText = text.substring(0, maxLength);
    return trimmedText.substring(0, trimmedText.lastIndexOf(" ")) + "...";
  }

  return (
    <div className="w-full h-screen bg-neutral-900 flex justify-center items-center">
      {isPaid ? (
        <div className="w-full h-screen bg-neutral-900 flex justify-center items-center">
          <div className="w-2/6 h-4/5 bg-white rounded-3xl">
            <div className="w-full h-2/5 rounded-tl-3xl rounded-tr-3xl flex flex-col items-center gap-y-2 justify-center">
              <div className="w-16 h-16 rounded-full bg-green-200 flex justify-center items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 flex justify-center items-center">
                  <FaCheck className="size-6 text-white p-0.5" />
                </div>
              </div>
              <p className="text-neutral-700 text-xl">Payment Success!</p>
              <p className="text-3xl font-bold">{formatCurrency(totalPrice)}</p>
              <div className="w-5/6 border-b border-slate-300 mt-5"></div>
            </div>
            <div className="w-full h-2/6 flex justify-center">
              <div className="w-5/6 h-full flex">
                <div className="w-2/4 flex flex-col gap-y-2">
                  <p className="text-neutral-500">Product Name</p>
                  <p className="text-neutral-500">Quantity</p>
                  <p className="text-neutral-500">Buyer Name</p>
                  <p className="text-neutral-500">Payment Time</p>
                  <p className="text-neutral-500">Total</p>
                </div>
                <div className="w-2/4 flex flex-col gap-y-2 items-end">
                  <p className="font-semibold">{TrimmedText(title, 20)}</p>
                  <p className="font-semibold">{quantity}</p>
                  <p className="font-semibold">{user?.name || "user tidak diketahui"}</p>
                  <p className="font-semibold">{new Date().toDateString()}</p>
                  <p className="font-semibold">{formatCurrency(totalPrice)}</p>
                </div>
              </div>
            </div>
            <div className="w-full  h-1/5 flex justify-center">
              <div className="w-5/6 h-full border-t border-slate-300 flex flex-col justify-between items-center ">
                <div className="flex gap-x-3 mt-5">
                  <p className="text-2xl font-semibold">Thank You</p>
                  <FaRegSmileBeam className="size-8" />
                </div>
                <Link
                  to="/"
                  className="underline font-semibold text-sm text-neutral-500"
                >
                  back to shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen bg-neutral-900 flex justify-center items-center">
          <div className="w-4/5 h-4/5 bg-white rounded-xl flex">
            <div className="w-3/5 flex flex-col p-5">
              <div className="w-full h-2/6 p-10">
                <p className="text-3xl font-semibold">
                  Selesaikan pembayaran anda.
                </p>
                <p className="text-sm text-neutral-600 mt-5 font-medium ">
                  Untuk melanjutkan pembelian anda, mohon untuk mengisi data
                  dibawah ini.
                </p>
              </div>
              <div className="w-full h-3/6 px-10">
                <div className="w-full h-10 flex items-center gap-x-3">
                  <IoIosCall className="size-6" />
                  <p className="text-lg text-neutral-600 font-semibold">
                    Nomor Telepon
                  </p>
                </div>
                <input
                  className="w-4/5 h-9 bg-gray-200 rounded-sm mt-1"
                  type="number"
                  value={telephoneNumber}
                  onChange={(e) => setTelephoneNumber(e.target.value)}
                />
                <div className="w-full h-10 flex items-center gap-x-3 mt-5">
                  <IoMdHome className="size-6" />
                  <p className="text-lg text-neutral-600 font-semibold">
                    Alamat
                  </p>
                </div>
                <textarea
                  className="w-4/5 bg-gray-200 rounded-sm mt-1"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
                <button
                  onClick={handlePayment}
                  className="px-13 py-2 bg-[#222831] text-white mt-10 rounded-md font-semibold"
                >
                  Pay Now
                </button>
              </div>
            </div>
            <div className="w-2/5 flex justify-start items-center">
              <div className="gradient w-4/5 h-4/5 bg-slate-200 rounded-md">
                <div className="flex flex-col items-center">
                  <img className="w-48" src={image} alt="Product" />
                  <p className="font-bold text-neutral-600 text-center">
                    {title}
                  </p>
                  <div className="w-5/5 flex items-center justify-center gap-x-2">
                    {quantity > 1 && (
                      <FiMinus
                        onClick={handleDecrease}
                        className="size-5 border cursor-pointer"
                      />
                    )}
                    <p className="text-lg font-bold text-neutral-700">
                      x{quantity}
                    </p>
                    <IoIosAdd
                      onClick={handleIncrease}
                      className="size-5 border cursor-pointer"
                    />
                  </div>
                </div>
                <div className="ml-11 mb-20">
                  <p className=" text-neutral-600">Harga,</p>
                  <p className="font-semibold text-3xl">
                    {totalPrice ? formatCurrency(totalPrice) : "Error"}
                  </p>
                </div>
                <p className="text-center font-semibold">Saldo Anda</p>
                <p className="text-center text-lg font-bold text-neutral-800">
                  {saldo !== null ? formatCurrency(saldo) : "Error"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
