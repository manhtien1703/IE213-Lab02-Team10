import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BirthdayReminderPage from "./pages/BirthdayReminderPage";
import ToursPage from "./pages/ToursPage";
import ReviewPage from "./pages/ReviewPage";
import AccordionPage from "./pages/AccordionPage";
import MenuPage from "./pages/MenuPage";
import TabsPage from "./pages/TabsPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/birthday-reiminder" element={<BirthdayReminderPage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/accordion" element={<AccordionPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/tabs" element={<TabsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
