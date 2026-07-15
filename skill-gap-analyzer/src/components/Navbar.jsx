//import { FaBell, FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ title }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar shadow-sm">
      <div className="container-fluid">

        <span className="navbar-brand fw-bold">
          {title}
        </span>

      </div>
    </nav>
  );
}

export default Navbar;