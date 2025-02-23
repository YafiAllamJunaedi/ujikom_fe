import { Link, useLocation } from "react-router-dom";
import { PiSneaker } from "react-icons/pi";

const Sidebar = ({ title, logo, onClick, link }) => {
  // const location = useLocation();
  const isActive = location.pathname === link;
  return (
    <div
      className={`w-32 h-10 flex justify-between gap-x-6 items-center cursor-pointer transition-all duration-200`}
      onClick={onClick}
    >
      <Link to={link} className="flex gap-x-6">
        <div className={`flex bg-white p-2 rounded-xl`}>
          {logo}
        </div>
        <p className={`mt-1.5 text-slate-200`}>{title}</p>
      </Link>
    </div>
  );
};

export default Sidebar;
