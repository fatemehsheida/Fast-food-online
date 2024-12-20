import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface PlaceOrderProps {
  setPage: (value: number) => void;
  closePlaceOrder: () => void;
}

const PlaceOrder: React.FC<PlaceOrderProps> = ({
  setPage,
  closePlaceOrder,
}) => {
  const [Count, setCount] = useState(0);
  const [username, setUsername] = useState('');
  const [usernumber, setUserNmber] = useState('');
  const [address, setAddress] = useState('');


  function handleCounter() {
    setCount(Count + 1);
  }

  const notifySuccess = () =>{
    toast.success(
      <div className="text-right text-xl font-thin ">
        <p>سفارش شما با شماره {Count} ثبت شد.</p>
        <p>آماده سازی:60 دقیقه</p>
      </div>
    );
  }



  const notifyError = () =>{
    toast.error(
      <div className="text-right text-xl font-thin ">
        <p>لطفا همه فیلد هارو پر کنید.</p>
      </div>
    );
  }

  const handleSubmit = () => {
    if(username === '' || usernumber === '' || address === ''){
      notifyError();
    }else{
      notifySuccess();
      handleCounter()
    }
  }


  return (
    <div className="w-full h-screen relative flex justify-center items-center content-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10"></div>

      <div className="bg-slate-50 absolute flex flex-col justify-between w-1/2 h-1/2 px-6 py-2 rounded-xl z-20">
        <div className="flex flex-row gap-5 ">
          <i
            className="font-bold text-3xl text-right cursor-pointer"
            onClick={closePlaceOrder}
          >
            ×
          </i>
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="number"
            name="usernumber"
            id="usernumber"
            placeholder="شماره تماس"
            className="border-slate-300 border-2 rounded-lg py-2 px-3"
            value={usernumber}
            onChange={(e) => setUserNmber(e.target.value)}
          />
          <textarea
            name="address"
            id="address"
            placeholder="آدرس"
            className="border-slate-300 border-2 rounded-lg py-2 px-3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
          <button
            type="button"
            className="cursor-pointer bg-orange-600 rounded-lg py-2 text-slate-50 text-lg"
            onClick={handleSubmit}
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
};

export default PlaceOrder;
