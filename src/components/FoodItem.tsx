import { IoAdd } from "react-icons/io5";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { CartItemType, IFastFood } from "../types/index";

type ProductCartType = {
  // product: CartItemType;
  product: IFastFood;
  setFastFood: React.Dispatch<React.SetStateAction<IFastFood[]>>;
  cart: CartItemType[];
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>;
};
function FoodItem({ product, setCart, cart }: ProductCartType) {
  function handleAddToCartButton() {
    setCart((prev) => {
      const updatedCart = [...prev];
      const found = updatedCart.find((item) => item.id === product.id);

      if (found) {
        found.qty++;
      } else {
        const newCartItem: CartItemType = { ...product, qty: 1 };
        updatedCart.push(newCartItem);
      }

      return updatedCart;
    });
  }

  function handledecreaseToCartButton() {
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

      return updatedCart;
    });
  }

  return (
    <div
      key={product.id}
      className="w-60 h-60 shadow-slate-300 shadow-lg border p-3 justify-between flex flex-col items-start"
    >
      <div className="">
        <div>
          <img className="w-52 h-28" src={product.path} />
        </div>
        <div className="h-1/2 justify-between flex flex-col items-start gap-2">
          <div className="w-full flex justify-between items-center pl-2">
            <span className="font-semibold text-lg">{product.title}</span>
            <span className="font-semibold text-sm text-orange-500">
              موجودی:{product.Inventory}
            </span>
          </div>

          <span className="text-xs font-semibold text-right">
            {product.description}
          </span>
          <div className="w-full flex flex-row items-center justify-between ">
            <span className="font-semibold text-sm text-orange-500 ">
              {product.price}.00 تومان
            </span>

            {cart.findIndex((item) => item.id === product.id) > -1 ? (
              <div className="flex w-1/3 justify-between">
                <button
                  onClick={handleAddToCartButton}
                  className=" rounded-full px-1 bg-green-500 text-white transition-all duration-200 hover:bg-green-700"
                >
                  <IoAdd />
                </button>
                <span>{cart.find((item) => item.id === product.id)?.qty}</span>
                <button
                  onClick={handledecreaseToCartButton}
                  className=" rounded-full px-1 bg-red-500 text-white transition-all duration-200 hover:bg-rose-700"
                >
                  <HiMiniMinusSmall />
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddToCartButton}
                className="w-1/3 px-2 py-1 text-sm font-semibold text-slate-100 bg-orange-400 items-center text-center rounded-full cursor-pointer hover:bg-orange-700 hover:opacity-80 transition-all duration-300"
              >
                افزودن
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
