import CartSopping from "./ListShopping";


interface ShoppingProps {
  setPage: (value: number) => void;
  onOrderPlaced: () => void; 
}

const Shopping: React.FC<ShoppingProps> = ({ setPage, onOrderPlaced }) => {
  const handleOrder = () => {
    onOrderPlaced();
  };

  return (
    <div className="bg-slate-100 fixed bottom-12 w-full h-1/8 px-8">
    <CartSopping />

      <button onClick={handleOrder} className="w-full bg-orange-500 text-slate-50 font-semibold text-xl my-2 rounded-full py-2 hover:bg-orange-700 hover:opacity-80 transition-all duration-300">
        ثبت سفارش
      </button>
    </div>
  );
};

export default Shopping;
