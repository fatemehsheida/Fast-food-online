import { useState } from "react";
import Menu from "./menu";
import PlaceOrder from "../components/PlaceOrder";

const ChangePage = () => {
  const [page, setPage] = useState(0);

  return (
    <>
      {page === 0 && <Menu setPage={setPage} />}
      {/* {page === 1 && <PlaceOrder setPage={setPage} />} */}
    </>
  );
};

export default ChangePage;