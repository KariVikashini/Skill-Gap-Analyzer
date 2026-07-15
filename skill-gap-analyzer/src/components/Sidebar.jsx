import { NavLink, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaClipboardList,
  FaMicrophone,
  FaChartPie,
  FaSignOutAlt,
  FaUsers,
  FaTasks,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar({ role }) {
  const navigate = useNavigate();

  const studentMenu = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Profile", icon: <FaUser />, path: "/profile" },
    { name: "Resume", icon: <FaFileAlt />, path: "/resume" },
    { name: "Assessment", icon: <FaClipboardList />, path: "/assessment" },
    { name: "Speaking", icon: <FaMicrophone />, path: "/speaking" },
    { name: "Career Analysis", icon: <FaChartPie />, path: "/career-analysis" },
  ];

  const adminMenu = [
    { name: "Dashboard", icon: <FaHome />, path: "/admin-dashboard" },
    { name: "Students", icon: <FaUsers />, path: "/admin/students" },
    { name: "Questions", icon: <FaTasks />, path: "/admin/questions" },
  ];

  const menu = role === "admin" ? adminMenu : studentMenu;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h4 className="text-center text-white mb-4">MENU</h4>

      {menu.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          {item.icon}
          <span>{item.name}</span>
        </NavLink>
      ))}

      {/* Logout Button */}
      <button className="menu-item logout-btn" onClick={handleLogout}>
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </div>
  );
}

export default Sidebar;