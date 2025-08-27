
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo + App Name */}
      <div className="logo">
        <span style={{ fontSize: "24px" }}></span>
        <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Apartments App</h1>
      </div>

      {/* Links */}
      <div className="links">
        {[
          { path: "/", label: "Home" },
          { path: "/create", label: "Create Apartment" },
          { path: "/apartments/1", label: "Sample Apartment" },
          { path: "/edit/1", label: "Edit Apartment" },
        ].map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
