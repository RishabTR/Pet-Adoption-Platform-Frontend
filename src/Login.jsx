import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "./Services/Postrequest";

function Login() {
  const navigate = useNavigate();

  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };
  const onHandleLogin = () => {
    console.log(loginCredentials);
    login(loginCredentials)
      .then((res) => {
        if (res.status == 201) {
          alert("Invalid username or password");
        } else if (res.status == 200) {
          alert("Login Successful");
          navigate("/user");
        }
      })
      .catch((error) => console.log(error));
  };
  const { username, password } = loginCredentials;
  return (
    <>
      <div className="login">
        <h2>Login</h2>
        <div className="container">
          <div className="header ">
            <div className="text"></div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <input
                type="text"
                placeholder="Name"
                onChange={onHandleChange}
                name="username"
              />
            </div>

            <div className="input">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={onHandleChange}
              />
            </div>
          </div>
          <div className="Forgot-password">
            Forget password?<span>Click Here!</span>
          </div>
          <div className="submit-container">
            <Link to="/register">
              <button>Sign Up</button>
            </Link>
            <button onClick={onHandleLogin}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
