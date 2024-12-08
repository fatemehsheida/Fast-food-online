import { FaPizzaSlice } from "react-icons/fa";

export default function HeaderFood() {
  return (
    <div
      className="bg-gradient-to-r from-orange-400 via-red-500
               to-orange-400 h-15 w-full fixed top-0 flex flex-row justify-between items-center px-20 py-4 text-slate-100"
    >
      <div className="flex gap-1 justify-center items-center">
        <i className="text-3xl">
          <FaPizzaSlice />
        </i>
        <h2 className="font-bold text-2xl">فست فود آنلاین</h2>
      </div>
      <div>
        <p className="text-xs font-semibold">بهترین غذاها در سریع ترین زمان</p>
      </div>
    </div>
  );
}
