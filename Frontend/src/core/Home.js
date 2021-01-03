import React,{ useState } from 'react'
import { signUp } from "../Auth/helper";

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
        <div>
        
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <div className="relative mb-4">
              <label for="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
              <input 
              type="email" 
              id="eml" 
              name="email"
              onChange={handleChange("email")} 
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input
               type="password" 
               id="pass" 
               name="password"
               onChange={handleChange("password")} 
               class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button onClick={onSubmit} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SignUp</button>
          </div>
        </div>
      </section>

        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/721x401/?typewriter" alt="blog" />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">How to improve typing speed?</h1>
                  <p class="leading-relaxed mb-3">Typing is all about muscle memory, so the only way to improve is to practice typing regularly. We created TheTypingCat to give you a tool to learn and practice touch typing in the most effective way. The process of developing proper habits requires you to train your fingers periodically and to be patient. You should first focus foremost on accuracy, ergonomics, and high typing speed will come with time. Not to overwork yourself. Remember, it is a marathon, not a sprint, it is better to take ten minutes exercises daily than a single one hour run.</p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/721x401/?typing" alt="blog" />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Words Per Minute (WPM)</h1>
                  <p class="leading-relaxed mb-3">The WPM stands for words per minute, and it is a measure of typing speed, commonly used in the recruitment process and typing speed tests. It is standardized to five characters or keystrokes. The benefits of a standardized measurement of input speed are that it enables comparison across language. Make sure you start your touch typing with high accuracy. Your speed will grow over time.</p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/722x402/?keyboard" alt="blog" />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">What is the proper finger position while typing?</h1>
                  <p class="leading-relaxed mb-3">You should always start typing by placing your fingers on the home row. There are the small bumps on the F and J key, which indicate the initial position of your index fingers. It helps you find this starting position on the keyboard without looking at it. Once you start with this position, your fingers have the full range of motion and a proper distance to all keys. It is the most optimal hands placement during typing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Home;
