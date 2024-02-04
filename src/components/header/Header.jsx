import "./header.css";
import Logo from "./Logo";
import Navbar from "./navbar";

function Header({ toggle, setToggle }) {
  return (
    <header className="header">
      <Logo />
      <Navbar toggle={toggle} setToggle={setToggle} />
      <div className="navButton" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <i className="bi bi-x-lg list-icon" style={{ fontSize: 35 }}></i>
        ) : (
          <i className="bi bi-list list-icon"></i>
        )}
      </div>
    </header>
  );
}

export default Header;
