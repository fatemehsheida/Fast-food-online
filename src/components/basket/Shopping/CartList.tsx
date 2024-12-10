import { IoAdd } from "react-icons/io5";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { FaRegTrashCan } from "react-icons/fa6";

function CartList() {
  return (
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
  )
}

export default CartList