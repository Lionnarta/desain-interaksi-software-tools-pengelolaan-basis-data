import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="w-[300px] h-screen p-10 bg-[#D4D4D4] font-poppins text-black">
      <h1 className="text-4xl font-bold text-center mb-[50px]">DATABASE</h1>
      <div>
        <div
          className={`text-2xl font-semibold ${
            location.pathname === "/" ? "bg-[#ECECEC]" : ""
          } px-4 py-3 rounded-md mb-[10px]`}
        >
          <Link to="/">Basis Data</Link>
        </div>
        <div
          className={`text-2xl font-semibold ${
            location.pathname === "/tabel" ? "bg-[#ECECEC]" : ""
          } px-4 py-3 rounded-md mb-[10px]`}
        >
          <Link to="/tabel">Tabel</Link>
        </div>
        <div
          className={`text-2xl font-semibold ${
            location.pathname === "/dokumentasi" ? "bg-[#ECECEC]" : ""
          } px-4 py-3 rounded-md mb-[10px]`}
        >
          <Link to="/dokumentasi">Dokumentasi</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
