import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Header from "./components/header.jsx";
import Layout from "./components/layout.jsx";
import Property from "./components/property.jsx";
import "./style/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/properties/:id" element={<Property />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
