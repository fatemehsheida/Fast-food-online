import { CartItemType, IFastFood } from "../types/index";

type ProductCartType = {
  product: CartItemType;
  setFastFood: React.Dispatch<React.SetStateAction<IFastFood[]>>;
  cart: CartItemType[];
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>;
};
function FoodItem({ product, setCart, cart }: ProductCartType) {
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
            <div className="w-1/3 px-2 py-1 text-sm font-semibold text-slate-100 bg-orange-400 items-center text-center rounded-full cursor-pointer hover:bg-orange-700 hover:opacity-80 transition-all duration-300">
              افزودن
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
