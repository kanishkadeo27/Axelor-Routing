import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

function Header() {
  const auth = useAuth();
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "blue",
    };
  };
  return (
    <>
      <header>
        <nav>
            <NavLink to="/home" style={navLinkStyles}>
              Home
            </NavLink>

            <NavLink to="/about" style={navLinkStyles}>
              About
            </NavLink>

            <NavLink to="/contact" style={navLinkStyles}>
              Contact
            </NavLink>

            <NavLink to="/profile" style={navLinkStyles}>
              Profile
            </NavLink>

            {!auth.user && (
              <NavLink to="/login" style={navLinkStyles}>
                login
              </NavLink>
            )}

            {auth.user && (
              <NavLink to="/admin" style={navLinkStyles}>
                Admin
              </NavLink>
            )}
        </nav>
      </header>
    </>
  );
}

export default Header;
