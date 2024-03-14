import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "./Services/Postrequest";

function Register() {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    type: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const onHandleSignup = (e) => {
    e.preventDefault();
    console.log(registerData);
    // if(username == ''||email==''|| password == ''|| type==''){
    //   alert("The ")
    // }
    register(registerData)
      .then((res) => {
        if (res.status == 200) {
          alert("Registration Successful");
        }

        // useNavigate("/login");
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="register">
        <h2>Register</h2>
        <form>
          <div className="container">
            <div className="header ">
              <div className="text"></div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  name="username"
                  onChange={onHandleChange}
                />
              </div>
              <div className="input">
                <input
                  type="email"
                  placeholder="Email Id"
                  name="email"
                  onChange={onHandleChange}
                  required
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={onHandleChange}
                  required
                />
              </div>
              <div className="type">
                <p>
                  Owner
                  <input
                    type="radio"
                    name="type"
                    value="Owner"
                    onChange={onHandleChange}
                  />
                </p>
                <p>
                  Adopter
                  <input
                    type="radio"
                    name="type"
                    value="Adopter"
                    onChange={onHandleChange}
                  />
                </p>
              </div>
            </div>
            <div className="Forgot-password">
              Forget password?<span>Click Here!</span>
            </div>
            <div className="submit-container">
              <button type="submit" onClick={onHandleSignup}>
                Sign Up
              </button>
              <Link to="/login">
                <button type="submit">Login</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
