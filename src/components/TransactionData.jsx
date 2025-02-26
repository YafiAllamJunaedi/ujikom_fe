const TransactionData = ({ image, title, name, date, quantity, total }) => {
  return (
    <div className="w-full h-24 flex items-center justify-between p-10  mt-5 border-l-0 border-t-0 border-r-0 border-b-2 border-slate-300">
      <div className="flex flex-col gap-x-2 items-center">
        <img className="w-20 mb-2" src={image} alt="" />
        <p className="font-semibold text-sm">{title}</p>
      </div>
      <p className="font-semibold text-sm">{name}</p>
      <p className="font-semibold text-sm text-slate-500">{date}</p>
      <p className="font-semibold text-sm text-slate-500">{quantity}</p>
      <p className="font-bold text-sm">{total}</p>
    </div>
  );
};

export default TransactionData;
