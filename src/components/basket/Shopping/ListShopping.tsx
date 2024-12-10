import { IoAdd } from "react-icons/io5";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { FaRegTrashCan } from "react-icons/fa6";
import { IFastFood } from "../../../types/index";

// interface listCartProps {
  // food: IFastFood;
  // setFastFood: (FastFood: IFastFood{}) => void; //تغییرات واسه delete
// }

// props: listCartProps

export default function CartShopping() {
  // const { food } = props;
  return (
    <div className="flex flex-col items-start gap-2 pt-3">
      <div className="font-bold text-2xl text-slate-900 ">
        <h2>سبد خرید</h2>
      </div>

      <div className="w-full h-14 overflow-y-scroll">
        <div className="w-full flex justify-between">
          <h3 className="font-bold text-xl ">سبیبس</h3>
          <div className="flex justify-center items-center gap-5  border-t-2 border-b-2 border-slate-200/50 rounded-lg">
            <div className="bg-slate-400 p-1 texl-3xl rounded-sm cursor-pointer hover:bg-gray-600">
              <HiMiniMinusSmall />
            </div>

            <h3 className="text-slate-950texl-5xl">3</h3>
            <div className="bg-orange-500 p-1 texl-3xl rounded-sm cursor-pointer hover:bg-orange-700  hover:opacity-80">
              <IoAdd />
            </div>
          </div>

          <div className="flex  gap-6">
            <div>
              <h3 className="font-bold text-xl ">dgbd</h3>
            </div>

            <div>
              <FaRegTrashCan
                size={22}
                className="hover:text-orange-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-bold text-xl text-slate-900 ">
        جمع کل: 245464264 تومان{" "}
      </h2>
    </div>
  );
}
