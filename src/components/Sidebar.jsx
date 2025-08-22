
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { path: "/", label: "Apartments" },
    { path: "/bookmarks", label: "Bookmarks" },
    { path: "/about", label: "About" },
    { path: "/create", label: "Create Apartment" },
  ];

  return (
    <aside className="sidebar">
      <h2>Navigation</h2>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
