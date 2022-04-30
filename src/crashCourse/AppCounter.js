import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Button} from "reactstrap";
import {logDOM} from "@testing-library/react";
import users from "../10/Users";

function AppCounter() {

    const [number, setNumber] = useState(0);
    const [users, setUsers] = useState([]);
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState([]);
    const inputRef = useRef();

    const decreaseHandler = () => {
        setNumber((prevState => {
            return prevState - 1;
        }))
    }

    const increaseHandler = () => {
        setNumber((prevState => {
            return prevState + 1;
        }))
    }

    useEffect(() => {
        try {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    setLoading(true);
                    return response.json();
                })
                .then((json) => {
                    setUsers(json);
                    setLoading(false);
                    console.log(users)
                });
        } catch (error) {
            setLoading(false);
        }
    }, [])

    const changeInputHandler = (event) => {
        setInput(event.target.value)
        console.log(input)
    }


    const filteredItems = [
        ...users.filter(item => item.name.toLowerCase().includes(input))
    ];


    const clearHandler = () =>{
        setInput('');
        inputRef.current.focus();
    }

    return (
        <Fragment>
            <div>
                <h1>Countr</h1>
                <div>{number}</div>
                <div>
                    <div>
                        <Button onClick={decreaseHandler}>Decrease</Button>
                    </div>
                    <div>
                        <Button onClick={increaseHandler}>Increase</Button>
                    </div>
                </div>
            </div>
            <div>
                <Button onClick={clearHandler} type={'button'}>Clear</Button>
                <input ref={inputRef} onInput={changeInputHandler} type={'text'} value={input}/>
            </div>
            <div>
                {
                    loading ? (<p>Loading...</p>) :
                        filteredItems.map((value, index) => {
                            return <p key={index}>{value.name}</p>;
                        })
                }
            </div>
        </Fragment>
    )

}

export default AppCounter;