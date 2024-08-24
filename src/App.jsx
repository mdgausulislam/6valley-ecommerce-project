import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import ProductsDetails from "./Components/ProductsDetails";
import FilterProduct from "./Components/FilterProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/product-details" element={<ProductsDetails />} />
          <Route path="/filter-product" element={<FilterProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
