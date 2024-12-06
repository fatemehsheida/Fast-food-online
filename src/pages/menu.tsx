import HeaderFood from "../../src/components/HeaderFood";
import Footer from "../../src/components/Footer";
import ContainerFood from "../../src/components/ContainerFood";
import Shopping from "../components/basket/Shopping";

export default function Menu() {
  return (
    <div>
      <HeaderFood />
      <Shopping />
      <ContainerFood />
      <Footer />
    </div>
  );
}
