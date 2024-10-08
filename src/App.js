import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BasisData from "./routes/BasisData";
import Tabel from "./routes/Tabel";
import Dokumentasi from "./routes/Dokumentasi";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <Routes>
        <Route path="/" element={<BasisData />} />
        <Route path="/tabel" element={<Tabel />} />
        <Route path="/dokumentasi" element={<Dokumentasi />} />
      </Routes>
    </div>
  );
}

export default App;
