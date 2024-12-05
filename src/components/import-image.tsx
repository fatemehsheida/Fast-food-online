import { IFastFood } from "../types/index";

interface todoItemProps {
  food: IFastFood;
  setFastFood: React.Dispatch<React.SetStateAction<IFastFood[]>>;
}

function FoodItem(props: todoItemProps) {
  const { food, setFastFood } = props;

  return (
    <div key={food.id} className="w-60 h-60 shadow-slate-400 shadow-xl border p-3 justify-between flex flex-col items-start bg-slate-50">
      <div >
        <img className="w-52 h-28" src={food.path} alt="" />
      </div>
      <span className="font-semibold text-xl">{food.title}</span>
      <span className="text-xs font-semibold">{food.description}</span>
      <span className="font-semibold text-sm">{food.price}.00 تومان</span>
      <div className="flex justify-between gap-3"></div>
    </div>
  );
}

export default FoodItem;
