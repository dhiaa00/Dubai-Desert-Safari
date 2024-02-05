import "./login.css";

const Login = () => {
  return (
    <form className="login-form" action="">
      <div className="form-wrapper">
        <div className="email-wrapper">
          <label htmlFor="email">Email</label>
          <div className="info-input">
            <i class="bi bi-envelope-at"></i>
            <input id="email" type="email" placeholder="example@gmail.com" />
          </div>
        </div>
        <div className="password-wrapper">
          <label htmlFor="password">Password</label>
          <div className="info-input">
            <i class="bi bi-shield-lock"></i>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
