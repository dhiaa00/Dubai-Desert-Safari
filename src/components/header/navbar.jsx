const Navbar = ({ toggle }) => {
  return (
    <nav
      className="navbar"
      style={{
        clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}>
      <ul className="navbar-links">
        <li className="navbar-link">
          <a href="">
            <i className="bi bi-house-door-fill"></i>
            <span>Home</span>
          </a>
        </li>
        <li className="navbar-link">
          <a href="">
            <i className="bi bi-question-circle-fill"></i>
            <span>About</span>
          </a>
        </li>
        <li className="navbar-link">
          <a href="">
            <i className="bi bi-arrow-right-square-fill"></i>
            <span>Login</span>
          </a>
        </li>
        <li className="navbar-link">
          <a href="">
            <i className="bi bi-person-fill-add" style={{ fontSize: 20 }}></i>
            <span>Register</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
