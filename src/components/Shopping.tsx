import { IoAdd } from "react-icons/io5";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { useState } from "react";
import { CartItemType, IFastFood } from "../types/index";

interface ShoppingProps {
  setPage: (value: number) => void;
  onOrderPlaced: () => void;
  ProductList: IFastFood[];
}

const Shopping: React.FC<ShoppingProps> = ({
  setPage,
  onOrderPlaced,
  ProductList,
}) => {
  // console.log("my Cart:", cart);
  console.log("my products", ProductList);
  const [cart, setCart] = useState<CartItemType[]>([]);

  const handleOrder = () => {
    onOrderPlaced();
  };

  const handleAddToCartButton = (product: IFastFood) => {
    setCart((prev) => {
      const updatedCart = [...prev];
      const found = updatedCart.find((item) => item.id === product.id);

      if (found) {
        found.qty++;
      } else {
        const newCartItem: CartItemType = { ...product, qty: 1 };
        updatedCart.push(newCartItem);
      }
      console.log(updatedCart);
      return updatedCart;
    });
  };

  const handledecreaseToCartButton = (product: IFastFood) => {
    setCart((prev) => {
      let updatedCart = [...prev];
      const found = updatedCart.find((item) => item.id === product.id);

      if (found) {
        if (found.qty > 1) {
          found.qty--;
        } else {
          updatedCart = updatedCart.filter((item) => item.id !== product.id);
        }
      }
      console.log(updatedCart);
      return updatedCart;
    });
  };

  console.log(cart);

  return (
    <div className="bg-slate-50 fixed bottom-12 w-full h-1/8 px-8">
      <div className="flex flex-col items-start gap-2 pt-3">
        <div className="font-bold text-2xl text-slate-900">
          <h2>سبد خرید</h2>
        </div>

        <div className="w-full h-14 overflow-y-scroll">
          {cart.map((item) => (
            <div className="w-full flex justify-between" key={item.id}>
              <h3 className="font-bold text-xl">{item.title}</h3>
              <div className="flex justify-center items-center gap-5 border-t-2 border-b-2 border-slate-200/50 rounded-lg">
                <div className="bg-slate-400 p-1 text-3xl rounded-sm cursor-pointer hover:bg-gray-600">
                  <HiMiniMinusSmall
                    onClick={() => handledecreaseToCartButton(item)}
                  />
                </div>

                <h3 className="text-slate-950 text-5xl">
                  {cart.find((cartItem) => cartItem.id === item.id)?.qty}
                </h3>

                <div className="bg-orange-500 p-1 text-3xl rounded-sm cursor-pointer hover:bg-orange-700 hover:opacity-80">
                  <IoAdd onClick={() => handleAddToCartButton(item)} />
                </div>
              </div>

              <div className="flex gap-6">
                <div>
                  <h3 className="font-bold text-xl">
                    {item.price * item.qty} تومان
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-bold text-xl text-slate-900">
          جمع کل:
          {cart.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.qty * currentValue.price;
          }, 0)}
          تومان
        </h2>
      </div>

      <button
        onClick={handleOrder}
        className="w-full bg-orange-500 text-slate-50 font-semibold text-xl my-2 rounded-full py-2 hover:bg-orange-700 hover:opacity-80 transition-all duration-300"
      >
        ثبت سفارش
      </button>
    </div>
  );
};

export default Shopping;
