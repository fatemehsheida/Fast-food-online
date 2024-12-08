import { useState } from 'react';
import HeaderFood from "../../src/components/HeaderFood";
import Footer from "../../src/components/Footer";
import ContainerFood from "../../src/components/ContainerFood";
import Shopping from "../components/basket/Shopping/Shopping";
import PlaceOrder from "../components/PlaceOrder"; // اضافه کردن PlaceOrder

interface MenuProps {
  setPage: (value: number) => void;
}

const Menu: React.FC<MenuProps> = ({ setPage }) => {
  // state برای مدیریت نمایش PlaceOrder
  const [showPlaceOrder, setShowPlaceOrder] = useState(false);

  // تابع برای تغییر وضعیت نمایش PlaceOrder
  const handleOrderPlacement = () => {
    setShowPlaceOrder(true); // هنگامی که سفارش ثبت شد، صفحه PlaceOrder نمایش داده می‌شود
  };

  // تابع برای بستن PlaceOrder
  const closePlaceOrder = () => {
    setShowPlaceOrder(false); // مخفی کردن PlaceOrder
  };

  return (
    <div>
      <HeaderFood />
      <Shopping setPage={setPage} onOrderPlaced={handleOrderPlacement} />
      <ContainerFood />
      <Footer />

      {/* نمایش PlaceOrder فقط زمانی که state showPlaceOrder برابر true باشد */}
      {showPlaceOrder && <PlaceOrder setPage={setPage} closePlaceOrder={closePlaceOrder} />}
    </div>
  );
};

export default Menu;
