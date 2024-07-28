import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faDatabase, faTable } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="w-[300px] h-screen fixed p-10 bg-[#D4D4D4] font-poppins text-black">
      <h1 className="text-4xl font-bold text-center mb-[50px]">DATABASE</h1>
      <div>
        <div
          className={`text-2xl font-semibold ${
            location.pathname === "/" ? "bg-[#ECECEC]" : ""
          } px-4 py-3 rounded-md mb-[10px] flex items-center`}
          style={{
            boxShadow: `${
              location.pathname === "/"
                ? "0px 5px 50px 5px rgba(0, 0, 0, 0.05)"
                : ""
            }`,
          }}
        >
          <FontAwesomeIcon icon={faDatabase} className="w-[20px] mr-[10px]" />
          <Link to="/">Basis Data</Link>
        </div>
        <div
          className={`text-2xl font-semibold ${
            location.pathname.substring(0, 6) === "/tabel" ? "bg-[#ECECEC]" : ""
          } px-4 py-3 rounded-md mb-[10px] flex items-center`}
          style={{
            boxShadow: `${
              location.pathname.substring(0, 6) === "/tabel"
                ? "0px 5px 50px 5px rgba(0, 0, 0, 0.05)"
                : ""
            }`,
          }}
        >
          <FontAwesomeIcon icon={faTable} className="w-[20px] mr-[10px]" />
          <Link to="/tabel">Tabel</Link>
        </div>
        <div
          className={`text-2xl font-semibold ${
            location.pathname === "/dokumentasi" ? "bg-[#ECECEC]" : ""
          } px-4 py-3 rounded-md mb-[10px] flex items-center`}
          style={{
            boxShadow: `${
              location.pathname === "/dokumentasi"
                ? "0px 5px 50px 5px rgba(0, 0, 0, 0.05)"
                : ""
            }`,
          }}
        >
          <FontAwesomeIcon icon={faBook} className="w-[20px] mr-[10px]" />
          <Link to="/dokumentasi">Dokumentasi</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
