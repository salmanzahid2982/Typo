import React,{ useState,useRef } from 'react'

import Base from '../core/Base.js'
import Preview from './Preview.js'
import Speed from './Speed.js'

const Typo=()=> {
    let interval = useRef(null)
    const [values, setValues] = useState
    (
        {text:"Test",
        userInput:"",
        error:false,
        symbols:0,
        sec:0,
        started:false,
        finished:false
        }
    )
    const{text,userInput,symbols,sec,started,finished}=values;

    const onRestart=event=>{
        event.preventDefault();
        setValues({...values,userInput:""});
    }

    const userInputChange=event=>
    {
        event.preventDefault();
        const v=event.target.value;
        setTime();
        onFinish(v);
        setValues({...values,userInput:v,symbols:countSymbols(v)});
        

    }

    const setTime=()=> {
        if (!started) {
            setValues({ ...values, started: true })
            interval.current = setInterval(() => {
                setValues(prevProps => (
                {
                    ...prevProps,
                     sec: prevProps.sec + 1
                    
                }))
            }, 1000)
        }
    }

    const onFinish=userInput=>{
        
        if(userInput==text)
        {
            clearInterval(interval.current)
            setValues({...values,finished:true});
            console.log("finished")
        }

    }

    const countSymbols=userinput=>{
        const Text=text.replace(' ','');
        console.log(Text);
        return userinput.replace(' ','').split('').filter((s,i)=>s===Text[i]).length;
    }

    return (
        <Base>
            <div className="container px-8 mx-auto flex">
                <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 " >
                    <Preview text={text} userInput={userInput} />
                    <div className="relative mb-4">
                        <textarea className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-8 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        placeholder="Start Typing..."
                        value={userInput}
                        onChange={userInputChange}
                        readOnly={finished}>
                        </textarea>
                        <Speed sec={sec} symbols={symbols} finished={finished}/>
                        <div class="float-right">
                            <button onClick={onRestart} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-md">Restart</button>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Typo;