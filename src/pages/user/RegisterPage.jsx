import { useState } from "react";
import { registerUser } from "../../services/UserService.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import icon from "/assets/icon2.png";
import { PiSneakerMoveLight } from "react-icons/pi";

const RegisterPage = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        await registerUser(name, email, password);
        alert('Register Berhasil');
        navigate('/login');
    } catch (err) {
        setError(err.message || 'Register gagal');
    }
};
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="w-4/5 h-4/5 flex rounded-xl bg-neutral-300">
        <div className="w-3/5 rounded-tl-2xl rounded-bl-2xl flex justify-center items-center">
          <img className="w-60 mr-10" src={icon} alt="" />
        </div>
        <div className="w-2/5 flex justify-center items-center bg-white rounded-tr-2xl rounded-br-2xl">
          <form onSubmit={handleRegister} className="w-4/5 h-full flex flex-col items-center mt-28">
            <PiSneakerMoveLight className="size-16" />
            <p className="text-3xl font-semibold mt-12">Hello, Welcome!</p>
            <p className="text-sm text-slate-600 mt-3">
              Please enter your details
            </p>
            <div className="w-full h-44 flex flex-col">
              <div className="w-full flex flex-col justify-center items-center mt-7 gap-y-7">
                <input
                  type="text"
                  className="w-72 border-2 border-t-0 border-l-0 border-r-0 border-black placeholder:text-black bg-white focus:outline-none text-black p-1"
                  placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />
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
              </div>
            </div>
            <div className="w-full flex justify-center mt-9">
              <button
                className="w-3/5 h-8 bg-black text-white font-semibold rounded-2xl cursor-pointer"
                type="submit"
              >
                Register
              </button>
            </div>
            <p className="text-sm mt-2">Have an account? <Link to="/login" className="font-semibold cursor-pointer">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
