import { Link } from "@tanstack/react-router";
import { navItems } from "../../app/kernel/nav";

export function Sidebar() {
  return (
    <nav>
      {navItems.map((item) => (
        <div key={item.path}>
          <Link to={item.path}>
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}