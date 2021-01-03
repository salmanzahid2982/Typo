import React, { useState } from "react";
import './App.css';
import { signUp } from "./Auth/helper";

const Signup=() =>{
  const [values, setValues] = useState({email:"",password:"",error:false}) 

  const {email,password}=values
  const handleChange=name=>event=>{
    setValues({...values,error:false,[name]:event.target.value});
  }

  const onSubmit = event => {
    event.preventDefault();
    setValues({...values,error:false})
    console.log(email);
    signUp({email,password})
    .then(data=>{
        console.log(data);
        setValues({...values,email:"",password:"",error:false})
    })
    .catch(console.log(`Error in SignUp `))
  }

  return (
    <div className="container">
      <div className="container mt-4">
      <div className="row">
          <form>
            <div class="form-group">
              <label for="Email">Email address</label>
              <input 
              type="email" 
              class="form-control" 
              id="email" 
              placeholder="Enter email"
              onChange={handleChange("email")}
               />
            </div>
            <div class="form-group">
              <label for="Password">Password</label>
              <input 
                type="password" 
                class="form-control" 
                id="password" 
                placeholder="Password" 
                onChange={handleChange("password")}
                />
              </div>
            <button onClick={onSubmit} type="submit" class="btn btn-primary">Submit</button>
          </form>
          </div>
      </div>
    </div>
  );
}

export default Signup;
