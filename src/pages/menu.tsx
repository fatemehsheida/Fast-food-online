import { useState } from 'react';
import HeaderFood from "../../src/components/HeaderFood";
import Footer from "../../src/components/Footer";
import ContainerFood from "../../src/components/ContainerFood";
import Shopping from "../components/basket/Shopping/Shopping";
import PlaceOrder from "../components/PlaceOrder";

interface MenuProps {
  setPage: (value: number) => void;
}

const Menu: React.FC<MenuProps> = ({ setPage }) => {

  const [showPlaceOrder, setShowPlaceOrder] = useState(false);


  const handleOrderPlacement = () => {
    setShowPlaceOrder(true);
  };

  const closePlaceOrder = () => {
    setShowPlaceOrder(false);  
  };

  return (
    <div>
      <HeaderFood />
      <Shopping setPage={setPage} onOrderPlaced={handleOrderPlacement} />
      <ContainerFood />
      <Footer />
      {showPlaceOrder && <PlaceOrder setPage={setPage} closePlaceOrder={closePlaceOrder} />}
    </div>
  );
};

export default Menu;
