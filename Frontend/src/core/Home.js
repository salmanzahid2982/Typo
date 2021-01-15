import React,{ useState } from 'react'
import { signUp } from "../Auth/helper";
import Base from './Base';
const Home=()=> {

  const [values, setValues] = useState({email:"",password:"",error:false}) 

  const {email,password}=values
  const handleChange=name=>event=>{
    setValues({...values,error:false,[name]:event.target.value});
  }

  const onSubmit = event => {
    console.log(email,password);
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
        <Base>
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
            <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Name</label>
              <input 
              type="email" 
              id="eml" 
              name="email"
              // onChange={handleChange("email")} 
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Eamil</label>
              <input 
              type="email" 
              id="eml" 
              name="email"
              onChange={handleChange("email")} 
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Password</label>
              <input
               type="password" 
               id="pass" 
               name="password"
               onChange={handleChange("password")} 
               class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button onClick={onSubmit} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SignUp</button>
            <p class="text-xs text-gray-500 mt-3">Already SignUp  <span class="text-purple-600 font-sans font-xl">Click Here</span></p>
          </div>
        </div>
      </section>
    </Base>
    )
}

export default Home;
