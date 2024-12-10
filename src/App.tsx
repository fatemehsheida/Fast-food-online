import "./App.css";
import Menu from "../src/pages/menu";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="bg-slate-50">
      {page === 0 && <Menu setPage={setPage} />}
      {/* {page === 1 && <PlaceOrder setPage={setPage} />} */}
    </div>
  );
}

export default App;
