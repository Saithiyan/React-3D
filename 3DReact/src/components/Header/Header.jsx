import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <NavLink to="/cubes">Cubes  </NavLink>
          <NavLink to="/dragon">Dragon  </NavLink>
          <NavLink to="/mydesk">MyDesk  </NavLink>
        </ul>
      </nav>
    </header>
  );
}
