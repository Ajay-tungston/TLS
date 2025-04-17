import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InHouse from "./pages/InHouse";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Proxitech from "./pages/Proxitech";
import ProminovaSection from "./pages/Prominova";



import Pixellar from "./pages/Pixellar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/inhouse-products" element={<InHouse />} />
      <Route path='/prominova' element={<ProminovaSection/>}/>
      <Route path="/pixellar" element={<Pixellar />} />
      <Route path="/proxitech" element={<Proxitech />} />
    </Routes>
  );
}

export default App;
