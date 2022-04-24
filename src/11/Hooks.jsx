import {useEffect, useState} from "react";

const Clock = ()=>{

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
/*        setTimeout(()=>{
            setTime(new Date())
        },1000)*/
        setTime(new Date());
    },[time])



    return(
        <h1>Hello from Clock {time.toLocaleTimeString()}</h1>
    )
}

export default Clock;