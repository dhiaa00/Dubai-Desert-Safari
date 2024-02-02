import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="navbar"
      style={{
        clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}>
      <ul className="navbar-links">
        <Link to="/" className="navbar-link">
          <i className="bi bi-house-door-fill"></i>
          <span>Home</span>
        </Link>
        <Link to="/about" className="navbar-link">
          <i className="bi bi-question-circle-fill"></i>
          <span>About</span>
        </Link>
        <Link to="/login" className="navbar-link">
          <i className="bi bi-arrow-right-square-fill"></i>
          <span>Login</span>
        </Link>
        <Link to="/register" className="navbar-link">
          <i className="bi bi-person-fill-add" style={{ fontSize: 20 }}></i>
          <span>Register</span>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
