import { NavLink,Link } from "react-router-dom";
import { useState } from "react";
function HeaderUser() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        Welcome User
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/user">Pets</NavLink>
        </li>
        <li>
          <NavLink to="/post">Post</NavLink>
        </li>
        <li>
          <NavLink to="/home">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderUser;
