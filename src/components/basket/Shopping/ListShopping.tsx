import CartList from "./CartList";
import { useState } from "react";
import type { CartItemType } from "../../../types/index";

export default function CartShopping() {
  const [cart, setCart] = useState<CartItemType[]>([]);

  return (
    <div className="flex flex-col items-start gap-2 pt-3">
      <div className="font-bold text-2xl text-slate-900 ">
        <h2>سبد خرید</h2>
      </div>

      <div className="w-full h-14 overflow-y-scroll">
        {/* <CartList/> */}

        {cart.map((item) => (
          <CartList key={item.id}  />
        ))}
      </div>

      <h2 className="font-bold text-xl text-slate-900 ">
        جمع کل: 245464264 تومان{" "}
      </h2>
    </div>
  );
}
