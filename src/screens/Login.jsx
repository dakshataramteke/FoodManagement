import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";

const Login = () => {
  let navigate = useNavigate();
  const [login , setLogin] = useState({email:"", password:""});


  const onChangeValue = (event)=>{
    setLogin({...login, [event.target.name]: event.target.value})
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();

  try {
    const response = await axios.post("http://localhost:5000/api/loginuser", login);
    console.log(response.data);
    
  
    if (response.data.success) { // Adjust this condition based on your API response
      // Login successful
      alert("Login Successful");
      setLogin({ email: "", password: "" });
      navigate("/");
    } else {
      // Handle login failure (e.g., show an error message)
      alert("Login Failed: " + response.data.message); // Adjust based on your API response
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("An error occurred during login. Please try again.");
  }
  }
  return (
    <>
      <div className="container">
        <div className="row mt-2">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center my-3">Login</h2>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="Email"
                aria-describedby="emailHelp"
                name="email"
                value={setLogin.email}
                onChange={onChangeValue}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="Password"
                name="password"
                value={setLogin.password}
                onChange={onChangeValue}
              />
            </div>

            <button type="submit" className="btn btn-success">
             Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
