import {useEffect, useState} from "react";

const Contact = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return ()=>{
            console.log("willUnmount")
            clearInterval(timer);
        }
    }, []);

    return <h1>Contact {time.toLocaleTimeString()}</h1>
}

export default Contact;