import { Slide, toast } from "react-toastify";
import "./login.css";

const Login = () => {
  const notify = (msg) => {
    toast.warn(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.type === "email") {
      const emailReg = new RegExp("[^A-Za-z]+\\d*@[A-Za-z]+\\.[A-Za-z]+");
      console.log(emailReg.test(e.value));
    }
  };

  return (
    <form className="login-form" action="" method="POST">
      <div className="form-wrapper">
        <div className="email-wrapper">
          <label htmlFor="email">Email</label>
          <div className="info-input">
            <i className="bi bi-envelope-at"></i>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              onChange={(e) => console.log(e.target.type)}
            />
          </div>
        </div>
        <div className="password-wrapper">
          <label htmlFor="password">Password</label>
          <div className="info-input">
            <i className="bi bi-shield-lock"></i>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
