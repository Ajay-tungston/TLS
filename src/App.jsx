import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InHouse from "./pages/InHouse";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Homee from "./pages/Homee";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homee />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/inhouse-products" element={<InHouse />} />
    </Routes>
  );
}

export default App;
