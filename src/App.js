import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BasisData from "./routes/BasisData";
import Dokumentasi from "./routes/Dokumentasi";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BasisData />} />
        <Route path="/dokumentasi" element={<Dokumentasi />} />
      </Routes>
    </>
  );
}

export default App;
