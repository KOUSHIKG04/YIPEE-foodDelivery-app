import React, { useRef, useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";
import Login from "./components/Login";

const App = () => {
  const [login, setLogin] = useState(false);
  const footerRef = useRef(null);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {login ? <Login setLogin={setLogin} /> : <></>}
        <div>
          <Navbar setLogin={setLogin} footerRef={footerRef}   />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
          </Routes>
        </div>
        <Footer  ref={footerRef}/>
      </div>
    </>
  );
};

export default App;
