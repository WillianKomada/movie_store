import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="*" element={<Error />} /> Página not found */}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
