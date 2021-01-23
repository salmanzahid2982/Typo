import React,{useState,useEffect} from 'react'

const Preview=({text,userInput})=>{
    var Text=text.split("");
    var len=userInput.length;
    return (
        <div className="border border-blue-200 p-6 rounded-lg mb-3">
        <p className="leading-relaxed text-base">
        {Text.map((s,i)=>{
            let color;
            if(i<len)
            {
                color=s===userInput[i]?'#dfffa0':'#fcbea4';
            }
           return( <span key={i} style={{backgroundColor:color}}>
            {s}
            </span>)
        })}
        </p>
        </div>
    )
}

export default Preview;