import React,{ useState } from 'react'
import Base from '../core/Base.js'
import Preview from './Preview.js'
import Speed from './Speed.js'

const Typo=()=> {
    
    const [values, setValues] = useState({email:"",password:"",error:false})
    
    return (
        <Base>
            <div className="container px-8 mx-auto flex">
                <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 " >
                    <Preview />
                    <div className="relative mb-4">
                        <textarea className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-8 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        placeholder="Start Typing...">
                        </textarea>
                        <Speed />
                        <div class="float-right">
                            <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-md">Restart</button>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Typo;