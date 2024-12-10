import { useState } from "react";
import type { CartItemType, IFastFood } from "../types/index";
import FoodItem from "../components/FoodItem";

type ProductProps = {
  ProductList: IFastFood[];
};

export default function ContainerFood({ ProductList }: ProductProps) {
  const [FastFood, setFastFood] = useState<IFastFood[]>(ProductList);

  const [cart, setCart] = useState<CartItemType[]>([]);

  return (
    <div className="bg-slate-50 w-full h-[56%] top-16 px-10 py-2 fixed overflow-hidden">
      <div className="text-neutral-800 font-bold text-2xl text-right">
        <p>منو</p>
      </div>
      <div>
        <div className="rtl w-full py-1 space-y-1 h-[420px] gap-5 overflow-y-scroll flex flex-wrap justify-center items-center bg-slate-50 pb-20">
          {FastFood.map((food) => (
            <FoodItem
              key={food.id}
              product={food}
              setFastFood={setFastFood}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
