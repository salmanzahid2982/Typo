import React from 'react'

const Speed=({sec,symbols})=> {

    const wpm=(symbols/5)/(sec/60);
    if(sec!==0 && symbols!==0)
    {   
        return(
            <div>
            {Math.round(wpm)} wpm
            </div>
        )
    }
    return null;
}

export default Speed;