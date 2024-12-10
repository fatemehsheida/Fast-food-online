import { useState } from "react";
import type { CartItemType, IFastFood } from "../types/index";
import FoodItem from "../components/import-image";


type ProductProps={
  ProductList: IFastFood
}



export default function ContainerFood({ProductList}:ProductProps) {
  const [FastFood, setFastFood] = useState<IFastFood[]>([
    {
      id: 1,
      title: "بیکی برگر",
      price: 230,
      description: "یک همبرگر بلژیکی منحصربه‌فرد است که در هلند نیز محبوب است.",
      path: "http://localhost:3000/assets/Becky-Burger.jpg",
      Inventory: 25,
    },
    {
      id: 2,
      title: "سالاد سزار",
      price: 206,
      description:
        "متشکل از کاهوی رومی، تکه‌های خرد شده نان تست با پنیر پارمزان و... است.",
      path: "http://localhost:3000/assets/Caesar-salad.jpeg",
      Inventory: 25,
    },
    {
      id: 3,
      title: "هات داگ بولز",
      price: 320,
      description: "هات داگ دست ساز گوشت،بیکن،گوجه فرنگی،سس مخصوص.",
      path: "http://localhost:3000/assets/Hot-Dog-Bulls.jpeg",
      Inventory: 25,
    },
    {
      id: 4,
      title: "استیک مرغ",
      price: 663,
      description: "استیک مرغ تازه یک انتخاب عالی برای تغذیه سالم است. ",
      path: "http://localhost:3000/assets/Percy-Chicken-Steak.jpeg",
      Inventory: 25,
    },
    {
      id: 5,
      title: "همبرگر",
      price: 62,
      description: "انتخاب بسیاری از افراد برای وعده های غذایی خود می باشد.",
      path: "http://localhost:3000/assets/Hamburger.jpeg",
      Inventory: 25,
    },
    {
      id: 6,
      title: "پیتزای ناپولیتن",
      price: 203,
      description:
        "گوجه فرنگی خام، پنیر بال موزارلای تازه، ریحان تازه و روغن زیتون.",
      path: "http://localhost:3000/assets/Neapolitan-Pizza.jpg",
      Inventory: 25,
    },
    {
      id: 7,
      title: "لازانیا",
      price: 655,
      description: "لایه‌های سه گانه پاستا ورقه‌ای، سس مخصوص و پنیر پیتزا.",
      path: "http://localhost:3000/assets/Lasagna.jpeg",
      Inventory: 25,
    },
    {
      id: 8,
      title: "قارچ برگر",
      price: 540,
      description: "گوشت چرخ کرده با نمک، فلفل و ادویه‌جات دلخواه.",
      path: "http://localhost:3000/assets/Mushroom-Burger.jpeg",
      Inventory: 25,
    },
    {
      id: 9,
      title: "سیب زمینی",
      price: 120,
      description: "سیب زمینی تنوری سس قارچ و پنیر چدار.",
      path: "http://localhost:3000/assets/Potato.png",
      Inventory: 25,
    },
    {
      id: 10,
      title: "زیتون برگر",
      price: 231,
      description: "قارچ،زیتون،پیاز ",
      path: "http://localhost:3000/assets/olive-Burger.jpg",
      Inventory: 25,
    },
    {
      id: 11,
      title: "پیتزا پپرونی",
      price: 325,
      description: "پپرونی - قارچ-پنیر-فلفل دلمه ای ، تند!",
      path: "http://localhost:3000/assets/Pepperoni-Pizza.jpg",
      Inventory: 25,
    },
    {
      id: 12,
      title: "برگر چیلی ",
      price: 260,
      description: "گوشت و سس مخصوص تشکیل شده است.",
      path: "http://localhost:3000/assets/chilli-Burger.jpg",
      Inventory: 25,
    },
    {
      id: 13,
      title: "پیتزا گوشت و قارچ",
      price: 150,
      description: "این غذا به علت وجود قارچ و پنیر و گوشت، کالری بالایی دارد.",
      path: "http://localhost:3000/assets/beef-mushroomm-pizza.jpg",
      Inventory: 25,
    },
    {
      id: 14,
      title: "ساندویچ بوقلمون",
      price: 216,
      description:
        "120 گرم ژامبون بوقلمون 90%، کاهو، گوجه، سس مخصوص هایدا، نان باگت.",
      path: "http://localhost:3000/assets/Turkeysandwich.jpeg",
      Inventory: 25,
    },
    {
      id: 15,
      title: "پیتزا مخصوص",
      price: 532,
      description: "ژامبون مرغ - ژامبون گوشت- قارچ-پنیر - فلفل دلمه ای",
      path: "http://localhost:3000/assets/Special-pizza.jpg",
      Inventory: 25,
    },
    {
      id: 16,
      title: "پاستا استیک",
      price: 652,
      description:
        " ۱۰۰ گرم فیله گوساله، پاستا دست ساز فتوچینی، قارچ و اسفناج.",
      path: "http://localhost:3000/assets/Steak-and-spinach-pasta.jpeg",
      Inventory: 25,
    },
    {
      id: 17,
      title: "پیتزا استیک",
      price: 526,
      description:
        "خمیر مخصوص چاودار، پنیر موزارلا، پنیر گودا، 170 گرم راسته گوساله گریل.",
      path: "http://localhost:3000/assets/steak-Pizza.jpg",
      Inventory: 25,
    },
    {
      id: 18,
      title: "سالاد فصل",
      price: 65,
      description: " ترکیبات متنوعی از سبزیجات تازه است.",
      path: "http://localhost:3000/assets/Seasonal-salad.jpg",
      Inventory: 25,
    },
    {
      id: 19,
      title: "نوشابه",
      price: 160,
      description: "انواع طعم ها",
      path: "http://localhost:3000/assets/noshabe.webp",
      Inventory: 25,
    },
    {
      id: 20,
      title: "دلستر",
      price: 190,
      description: "قوطی و شیشه با انواع طعم ها",
      path: "http://localhost:3000/assets/barbican.webp",
      Inventory: 25,
    },
  ]);

const [cart, setCart] = useState<CartItemType[]>([])



  return (
    <div className="bg-slate-100 w-full h-[56%] top-16 px-10 py-2 fixed overflow-hidden">
      <div className="text-neutral-800 font-bold text-2xl text-right">
        <p>منو</p>
      </div>
      <div>
        <div className="rtl w-full py-1 space-y-1 h-[420px] gap-5 overflow-y-scroll flex flex-wrap justify-center items-center bg-slate-100 pb-20">
          {FastFood.map((food) => (
            <FoodItem key={food.id} product={food} setFastFood={setFastFood} cart={cart} setCart={setCart}/>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
