import { MdVerified } from "react-icons/md";

const Benefit = ({title, desc, icon}) => {
  return (
    <div className="h-36 rounded-xl bg-neutral-300 p-6">
        <div className="w-full flex items-center gap-x-3">
            {icon}
            <p className="font-semibold text-base">{title}</p>
        </div>
        <p className="mt-1 ml-10 text-sm">{desc}</p>
    </div>
  )
}

export default Benefit
