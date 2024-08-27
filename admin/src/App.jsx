import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";


const App = () => {
  const URL = "http://localhost:3000";
  return (
    <div>
      <Navbar />
      <div className="flex p-3">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add URL={URL}/>} />
          <Route path="/list" element={<List URL={URL}/>} />
          <Route path="/orders" element={<Orders URL={URL}/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
