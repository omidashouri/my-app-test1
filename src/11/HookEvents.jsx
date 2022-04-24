import {Button} from "reactstrap";
import {useEffect, useState} from "react";

const HookEvents=()=>{
    const [counter, setCounter] = useState(0);

    const plus = () => {
        setCounter(counter+1);
    }

    const minus = () => {
        setCounter(counter-1);
    }

    useEffect(()=>{
        if(counter===5)
            console.log("arrived to five")
    },[counter])

    return(
        <div>
            <h1>Counter:{counter}</h1>
            <Button onClick={plus} color={'success'}>Plus</Button>
            <Button onClick={minus} color={'danger'}>Minus</Button>
        </div>
    )
}

export default HookEvents;