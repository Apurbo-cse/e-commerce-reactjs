import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Category from "./components/home/category/Category";
import SingleProduct from "./components/singleProduct/SingleProduct";
import Footer from "./components/footer/Footer";
import AppContext from "./utils/context";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
          <Footer />
        </AppContext>
      </BrowserRouter>
    </>
  );
}

export default App;
