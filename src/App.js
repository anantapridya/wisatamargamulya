import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import DetailWisata from "./pages/DetailWisata";

function App() {
  return (
   <>
   {/* <Navbar /> */}
   <Router>
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/wisata/:path" element={<DetailWisata />} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
