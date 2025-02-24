import { useState } from "react";
import { loginUser } from "../../services/UserService.js";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { PiSneakerMoveLight } from "react-icons/pi";
import icon from "/assets/icon.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);
      console.log("Full Response:", response);
      console.log("Response Data:", response.data);
      if (response && response.id) {
        const userData = {
          id: response.id,
          name: response.name,
          email: response.email,
          saldo: response.saldo,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        alert("Login Berhasil");
        navigate("/account");
      } else {
        throw new Error("Login gagal, data user tidak ditemukan.");
      }
    } catch (err) {
      setError(err.message || "Login gagal");
    }
  };

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="w-4/5 h-4/5 flex rounded-xl bg-neutral-300">
        <div className="w-3/5 rounded-tl-2xl rounded-bl-2xl flex justify-center items-center">
          <img src={icon} alt="" />
        </div>
        <div className="w-2/5 flex justify-center items-center bg-white rounded-tr-2xl rounded-br-2xl">
          <div className="w-4/5 h-full flex flex-col items-center mt-28">
            <PiSneakerMoveLight className="size-16" />
            <p className="text-3xl font-semibold mt-12">Welcome Back!</p>
            <p className="text-sm text-slate-600 mt-3">
              Please enter your details
            </p>
            <div className="w-full h-44 flex flex-col">
              <form
                onSubmit={handleLogin}
                className="w-full flex flex-col justify-center items-center mt-7 gap-y-10"
              >
                <input
                  type="email"
                  className="w-72 border-2 border-t-0 border-l-0 border-r-0 border-black placeholder:text-black bg-white focus:outline-none text-black p-1"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />

                <input
                  type="password"
                  className="w-72 border-2 border-t-0 border-l-0 border-r-0 border-black placeholder:text-black bg-white focus:outline-none text-black p-1"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <div className="w-full flex justify-center">
                  <button
                    type="submit"
                    className="w-3/5 h-8 bg-black text-white font-semibold rounded-2x cursor-pointer"
                  >
                    Login
                  </button>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
              </form>
            </div>
            <p className="text-sm mt-10">
              Dont have an account?
              <Link to="/register" className="font-semibold cursor-pointer">
                Sign Up
              </Link>
            </p>
            <div className="flex mt-5 items-center gap-x-2">
              <Link to="/" className="text-sm font-semibold underline">Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
