import { useState } from "react";
import { IFastFood } from "../types/index";
import FoodItem from "../components/import-image";

export default function ContainerFood() {
  const [FastFood, setFastFood] = useState<IFastFood[]>([
    {
      id: 1,
      title: "بیکی برگر",
      price: 230,
      description: "یک همبرگر بلژیکی منحصربه‌فرد است که در هلند نیز محبوب است.",
      path: "http://localhost:3000/assets/Becky-Burger.jpg",
    },
    {
      id: 2,
      title: "پیتزا گوشت و قارچ",
      price: 150,
      description: "این غذا به علت وجود قارچ و پنیر و گوشت، کالری بالایی دارد.",
      path: "http://localhost:3000/assets/beef-mushroomm-pizza.jpg",
    },
    {
      id: 3,
      title: "سالاد سزار",
      price: 206,
      description:
        "متشکل از کاهوی رومی، تکه‌های خرد شده نان تست با پنیر پارمزان و... است.",
      path: "http://localhost:3000/assets/Caesar-salad.jpeg",
    },
    {
      id: 4,
      title: "برگر چیلی ",
      price: 260,
      description:
        "نوعی همبرگر است که از یک نان ، یک تکه گوشت و یک سس مخصوص تشکیل شده است.",
      path: "http://localhost:3000/assets/chilli-Burger.jpg",
    },
    {
      id: 5,
      title: "همبرگر",
      price: 62,
      description:
        "همبرگر به یک غذای محبوب در میان فست فود ها و انتخاب بسیاری از افراد برای وعده های غذایی خود می باشد.",
      path: "http://localhost:3000/assets/Hamburger.jpeg",
    },
    {
      id: 6,
      title: "هات داگ بولز",
      price: 320,
      description:
        "هات داگ دست ساز 100% گوشت،بیکن،خیارشور،گوجه فرنگی،پیاز کاراملی،پنیر،سس مخصوص.",
      path: "http://localhost:3000/assets/Hot-Dog-Bulls.jpeg",
    },
    {
      id: 7,
      title: "لازانیا",
      price: 655,
      description: "لایه‌های سه گانه پاستا ورقه‌ای، سس مخصوص و پنیر پیتزا.",
      path: "http://localhost:3000/assets/Lasagna.jpeg",
    },
    {
      id: 8,
      title: "قارچ برگر",
      price: 540,
      description: "گوشت چرخ کرده با نمک، فلفل و ادویه‌جات دلخواه.",
      path: "http://localhost:3000/assets/Mushroom-Burger.jpeg",
    },
    {
      id: 9,
      title: "پیتزای ناپولیتن",
      price: 203,
      description:
        "گوجه فرنگی خام، پنیر بال موزارلای تازه، ریحان تازه و روغن زیتون.",
      path: "http://localhost:3000/assets/Neapolitan-Pizza.jpg",
    },
    {
      id: 10,
      title: "زیتون برگر",
      price: 231,
      description: "قارچ،زیتون،پیاز ",
      path: "http://localhost:3000/assets/olive-Burger.jpg",
    },
    {
      id: 11,
      title: "پیتزا پپرونی",
      price: 325,
      description: "پپرونی - قارچ-پنیر-فلفل دلمه ای ، تند!",
      path: "http://localhost:3000/assets/Pepperoni-Pizza.jpg",
    },
    {
      id: 12,
      title: "استیک مرغ",
      price: 663,
      description: "استیک مرغ تازه یک انتخاب عالی برای تغذیه سالم است. ",
      path: "http://localhost:3000/assets/Percy-Chicken-Steak.jpeg",
    },
    {
      id: 13,
      title: "سیب زمینی",
      price: 120,
      description: "سیب زمینی تنوری، سیب زمینی با سس قارچ و پنیر چدار.",
      path: "http://localhost:3000/assets/Potato.png",
    },
    {
      id: 14,
      title: "سالاد فصل",
      price: 65,
      description: " ترکیبات متنوعی از سبزیجات تازه است.",
      path: "http://localhost:3000/assets/Seasonal-salad.jpg",
    },
    {
      id: 15,
      title: "پیتزا مخصوص",
      price: 532,
      description: "ژامبون مرغ - ژامبون گوشت- قارچ-پنیر - فلفل دلمه ای",
      path: "http://localhost:3000/assets/Special-pizza.jpg",
    },
    {
      id: 16,
      title: "پاستا استیک و اسفناج",
      price: 652,
      description:
        "۴۰۰ گرم، ۱۰۰ گرم فیله گوساله، پاستا دست ساز فتوچینی، قارچ و اسفناج، خامه، پنیر پارمسان.",
      path: "http://localhost:3000/assets/Steak-and-spinach-pasta.jpeg",
    },
    {
      id: 17,
      title: "پیتزا استیک",
      price: 526,
      description:
        "خمیر مخصوص چاودار، پنیر موزارلا، پنیر گودا، 170 گرم راسته گوساله گریل، قارچ، زیتون.",
      path: "http://localhost:3000/assets/steak-Pizza.jpg",
    },
    {
      id: 18,
      title: "ساندویچ بوقلمون",
      price: 216,
      description:
        "120 گرم ژامبون بوقلمون 90%، کاهو، گوجه، سس مخصوص هایدا، نان باگت.",
      path: "http://localhost:3000/assets/Turkeysandwich.jpeg",
    },
    {
      id: 19,
      title: "نوشابه",
      price: 160,
      description: "انواع طعم ها",
      path: "http://localhost:3000/assets/noshabe.webp",
    },
    {
      id: 20,
      title: "دلستر",
      price: 190,
      description: "قوطی و شیشه با انواع طعم ها",
      path: "http://localhost:3000/assets/barbican.webp",
    },
  ]);
  return (
    <div className="bg-slate-100 w-full h-[60%] top-16 px-10 py-2 fixed overflow-hidden">
      <div className="text-neutral-800 font-bold text-2xl text-right">
        <p>منو</p>
      </div>
      <div>
        <div className="w-full py-1 space-y-1 h-[420px] gap-5 overflow-y-scroll flex flex-wrap justify-center items-center ">
          {FastFood.map((food) => (
            <FoodItem key={food.id} food={food} setFastFood={setFastFood} />
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
