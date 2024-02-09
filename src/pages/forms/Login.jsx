import { useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "./login.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [emailvalue, setEmailvalue] = useState("");
  const [passwordvalue, setPasswordvalue] = useState("");

  const notifyerror = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  };
  const notifyvalidation = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = new RegExp("^[A-Za-z]+\\d*@[A-Za-z]+\\.[A-Za-z]{2,}$");
    if (!emailRegex.test(emailvalue)) {
      notifyerror("Email adress non valide");
    } else if (passwordvalue.length < 8) {
      notifyerror("Password should contain at least 8 characters");
    } else {
      setEmailvalue("");
      setPasswordvalue("");
      notifyvalidation("Logged in");
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        className="login-form"
        action=""
        method="POST"
        onSubmit={(e) => handleSubmit(e)}>
        <div className="form-wrapper">
          <div className="email-wrapper">
            <label htmlFor="email">Email</label>
            <div className="info-input">
              <i className="bi bi-envelope-at"></i>
              <input
                id="email"
                placeholder="example@gmail.com"
                value={emailvalue}
                onChange={(e) => {
                  setEmailvalue(e.target.value);
                }}
                formNoValidate
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
                formNoValidate
                value={passwordvalue}
                onChange={(e) => {
                  setPasswordvalue(e.target.value);
                }}
              />
            </div>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
