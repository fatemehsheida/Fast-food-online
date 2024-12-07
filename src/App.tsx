import "./App.css";
import HeaderFood from "../src/components/HeaderFood";
import Footer from "../src/components/Footer";
import ContainerFood from "../src/components/ContainerFood";
import PlaceOrder from "../src/PlaceOrder";


function App() {
  return (
    <div>
      <HeaderFood />
      <ContainerFood />
      <Footer />
      {/* <PlaceOrder /> */}
    </div>
  );
}

export default App;
