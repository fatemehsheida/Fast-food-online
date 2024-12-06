import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function PlaceOrder() {
  const notify = () => 
  toast.success("سفارش شما  با شماره 8 ثبت شد.آماده سازی :60دقیقه");
  return (
    <div className="w-full h-screen relative flex justify-center items-center content-center">
      <div className="bg-slate-800/60 opacity-70 w-full h-full"></div>
      <div className="bg-slate-50 absolute opacity-100 flex flex-col justify-between w-1/2 h-1/2 px-6 py-2 rounded-xl content-center">
        <div className="flex flex-row gap-5 ">
          <i className="font-bold text-3xl text-right">×</i>
          <h2 className="font-bold text-2xl leading-8 text-center mb-4 h-10 flex content-end items-center">
            ثبت سفارش
          </h2>
        </div>
        <form className="py-4 flex flex-col gap-2 justify-evenly h-full items-between">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="نام کامل"
            className="border-slate-300 border-2 rounded-lg py-2 px-3"
          />
          <input
            type="number"
            name="usernumber"
            id="usernumber"
            placeholder="شماره تماس"
            className="border-slate-300 border-2 rounded-lg py-2 px-3"
          />
          <textarea
            name="address"
            id="address"
            placeholder="آدرس"
            className="border-slate-300 border-2 rounded-lg py-2 px-3"
          ></textarea>
          <button
            type="button"
            className="cursor-pointer bg-orange-600 rounded-lg py-2 text-slate-100 text-lg"
            onClick={ notify}
          >
            ثبت سفارش
          </button>
        </form>
        <ToastContainer
    className="fixed top-1/2 left-1/2 transform translate-x-1/2 translate-y-1/2 text-left"
    autoClose={3000}
    hideProgressBar={false}
    closeOnClick
  rtl
    />
      </div>
    </div>

  );
  
}
