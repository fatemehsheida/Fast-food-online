import { useState } from 'react';
import HeaderFood from "../../src/components/HeaderFood";
import Footer from "../../src/components/Footer";
import ContainerFood from "../../src/components/ContainerFood";
import Shopping from "../components/basket/Shopping/Shopping";
import PlaceOrder from "../components/PlaceOrder";
import { IFastFood } from "../types"; 

interface MenuProps {
  setPage: (value: number) => void;
}

const Menu: React.FC<MenuProps> = ({ setPage }) => {

  const [showPlaceOrder, setShowPlaceOrder] = useState(false);
  const [CartItemList, setCartItemList] = useState();

  const handleOrderPlacement = () => {
    setShowPlaceOrder(true);
  };

  const closePlaceOrder = () => {
    setShowPlaceOrder(false);  
  };

  const ProductList: IFastFood[] = [
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
  ]



  return (
    <div>
      <HeaderFood />
      <ContainerFood ProductList={ProductList}/>
      <Shopping setPage={setPage} onOrderPlaced={handleOrderPlacement} />
      <Footer />
      {showPlaceOrder && <PlaceOrder setPage={setPage} closePlaceOrder={closePlaceOrder} />}
    </div>
  );
};

export default Menu;
