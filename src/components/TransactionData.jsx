import dummy from "/assets/shoes_collection/6.png";

const TransactionData = () => {
    const date = new Date()
  return (
    <div className="w-full h-24 flex items-center justify-between p-10  mt-5 border-l-0 border-t-0 border-r-0 border-b-2 border-slate-300">
      <div className="flex flex-col gap-x-2 items-center">
          <img className="w-20 mb-2" src={dummy} alt="" />
          <p className="font-semibold text-sm">Nike Samba x Amba</p>
      </div>
      <p className="font-semibold text-sm">Malone Lam</p>
      <p className="font-semibold text-sm text-slate-500">{date.toLocaleString()}</p>
      <p className="font-semibold text-sm text-slate-500">2 items</p>
      <p className="font-bold text-sm">IDR 3,000,000,00</p>
    </div>
  );
};

export default TransactionData;

// order, customer, date, items, delivery method, total
