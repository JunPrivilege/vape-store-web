import React from "react";
import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import FaqPage from "./pages/FaqPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage";

function App() {
  return (
    <div>
      <NavbarComponent />
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/product" Component={ProductPage} />
            <Route path="/faq" Component={FaqPage} />
            <Route path="/testimonial" Component={TestimonialPage} />
            <Route path="/syaratketentuan" Component={SyaratKetentuanPage} />
        </Routes>
      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
