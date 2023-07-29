import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Carousel from "./components/carousel/Carousel";
import Navbar from "./components/Navbar";
import DetailWisata from "./pages/DetailWisata";
import Modal from "./components/Modal";
import DaftarDestinasi from "./pages/DaftarDestinasi";

function App() {
  return (
   <>
   {/* <Navbar /> */}
   {/* <Modal /> */}
   <Router>
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/wisata/:path" element={<DetailWisata />} />
      <Route path="/daftar/wisata" element={<DaftarDestinasi />} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
