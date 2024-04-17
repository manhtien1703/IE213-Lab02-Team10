import React, { useState } from "react";
import "./index.css";
import ToursPage from "./pages/02-tours";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import BirthdayReminder from "./pages/01-birthday-reminder";
import ReviewPage from "./pages/03-reviews";
import AccordionPage from "./pages/04-accordion";
import MenuPage from "./pages/05-menu";
import Tabs from "./pages/06-tabs";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/birthday-reiminder" element={<BirthdayReminder />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/accordion" element={<AccordionPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/tabs" element={<Tabs />} />
      </Routes>
    </Router>
  );
}

export default App;
