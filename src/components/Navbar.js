import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Basis Data</Link>
      <Link to="/tabel">Tabel</Link>
      <Link to="/dokumentasi">Dokumentasi</Link>
    </div>
  );
};

export default Navbar;
