import dubaiLogo from "../../images/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={dubaiLogo} alt="logo" />
      <div className="logotext">
        <b>dubai</b>
        <b>desert</b>
        <b>safari</b>
      </div>
    </div>
  );
};

export default Logo;
