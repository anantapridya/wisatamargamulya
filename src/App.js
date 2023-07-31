import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DetailWisata from "./pages/DetailWisata";
import DaftarDestinasi from "./pages/DaftarDestinasi";

function App() {
  return (
   <>
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
