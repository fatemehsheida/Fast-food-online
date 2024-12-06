import CartSopping from "./Shopping/ListShopping";
import Button from "./Shopping/button";

export default function Shopping() {
  return (
    <div className="bg-slate-100 fixed bottom-12 w-full h-1/8 px-8">
      <CartSopping />
      <Button />
    </div>
  );
}
