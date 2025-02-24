import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { formatCurrency } from "../../additional/Currency.js";
import { IoPersonSharp } from "react-icons/io5";

const Account = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!storedUser) {
      navigate("/login");
    }
  }, [storedUser, navigate]);

  const [user, setUser] = useState(storedUser || { name: "", saldo: 0 });

  console.log("Saldo dari localStorage:", user.saldo);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/profile/${storedUser.id}`)
      .then((res) => {
        console.log("Saldo dari server:", res.data.saldo);
        setUser((prevUser) => ({
          ...prevUser,
          saldo: res.data.saldo,
          name: res.data.name,
        }));

        localStorage.setItem(
          "user",
          JSON.stringify({
            ...storedUser,
            saldo: res.data.saldo,
            name: res.data.name,
          })
        );
      })
      .catch((err) => console.log(err));
  }, [storedUser]);  // kalo error ganti user.saldo di []

  const handleLogout = () => {
    const confirmLogout = window.confirm("Apakah kamu yakin ingin logout?");
    if (confirmLogout) {
      localStorage.removeItem("user");
      alert("Logout Berhasil");
      navigate("/");
    }
  };
  if (!storedUser) {
    return null;
  }

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="w-2/6 h-4/5 flex flex-col bg-white rounded-2xl">
        <div className="w-full h-1/3 flex flex-col items-center justify-end">
          <IoPersonSharp className="size-14" />
          <p className="text-3xl font-semibold mt-3">{user.name}</p>
        </div>
        <div className="w-full h-1/5 flex flex-col items-center">
          <div>
            <p className="text-sm text-slate-600 mt-8">Your balance,</p>
            <p className="text-4xl font-bold text-green-600">
              {formatCurrency(user.saldo)}
            </p>
          </div>
        </div>
        <div className="w-full h-1/3 flex flex-col items-center justify-start mt-5">
          <button className="w-2/5 h-14 bg-black text-white font-semibold rounded-2xl">
            Add Balance
          </button>
          <Link to="/" className="font-semibold text-sm underline mt-3">
            Back
          </Link>
          <div className="w-full flex h-full items-end justify-center">
            <p onClick={handleLogout} className="cursor-pointer font-semibold">
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
