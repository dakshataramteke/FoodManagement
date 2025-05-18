import {Link} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Signup = () => {
    const [credentails, setCredentials] =useState( {
        name:"",
        email:"",
        password:"",
        location:""
    })

      const onChangeValue = (event)=>{
       const res=  setCredentials({...credentails,[event.target.name]: event.target.value});
        console.log(res);
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await axios.post("http://localhost:5000/api/createuser", credentails)
      console.log(response.data);
      alert("User Created ..");
      setCredentials({
        name:"",
        email:"",
        password:"",
        location:""
      })
      console.log(credentails);
    }

  
  return (
    <>
      <div className="container">
        <div className="row mt-2">
          <form onSubmit={handleSubmit}>
          <h2 className="text-center my-4">Create a User</h2>
           <div className="mb-3">
              <label htmlFor="name" className="form-label">
               Name <span className="text-danger fw-bold">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                name="name"
                value={credentails.name}
                onChange={onChangeValue}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email address <span className="text-danger fw-bold">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="Email"
                aria-describedby="emailHelp"
                name='email'
                value={credentails.email}
                onChange={onChangeValue}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password <span className="text-danger fw-bold">*</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="Password"
                name='password'
                value={credentails.password}
                onChange={onChangeValue}
              />
            </div>
             <div className="mb-3">
              <label htmlFor="Location" className="form-label">
               Location <span className="text-danger fw-bold">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="Location"
                aria-describedby="emailHelp"
                name='location'
                value={credentails.location}
                onChange={onChangeValue}
              />
            </div>

            <button type="submit" className="m-3 btn btn-success">
             Create User
            </button>
            <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
