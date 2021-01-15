import React, { useState } from "react";
import './App.css';
//import { signUp } from "./Auth/helper";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Base from "./core/Base";
const Signup=() =>{
  // const [values, setValues] = useState({email:"",password:"",error:false}) 

  // const {email,password}=values
  // const handleChange=name=>event=>{
  //   setValues({...values,error:false,[name]:event.target.value});
  // }

  // const onSubmit = event => {
  //   event.preventDefault();
  //   setValues({...values,error:false})
  //   console.log(email);
  //   signUp({email,password})
  //   .then(data=>{
  //       console.log(data);
  //       setValues({...values,email:"",password:"",error:false})
  //   })
  //   .catch(console.log(`Error in SignUp `))
  // }

  return (

    <Base>
      <div className="container mt-4">
      <div className="row">
      <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
          </div>
      </div>
    </Base>
  );
}

export default Signup;
