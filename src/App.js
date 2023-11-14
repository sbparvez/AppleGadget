import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Offer from "./routes/Offer";
import Cart from "./routes/Cart";
import PreOrder from "./routes/PreOrder";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pre-order" element={<PreOrder />} />
      </Routes>
    </div>
  );
};

export default App;
