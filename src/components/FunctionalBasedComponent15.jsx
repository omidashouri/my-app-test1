import React, {useEffect, useState} from "react";
import {Button, Col, Container, Row} from "reactstrap";


function FunctionalBasedComponent15() {

    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);


    const handleCounter = () => {
        setCount(((prevState) => prevState + 1))
    };

    useEffect(()=>{
        console.log('run as component did mount')
    },[])

    useEffect(() => {
        if (count && count === 5) {
            setFlag(true)
        }
    }, [count])

    useEffect(()=>{
        return ()=>{
            console.log('run as component unmount')
        }
    })

    return (
        <Container>
            <Row>
                <Col md={6}><Button onClick={handleCounter} color={'success'}>Counter</Button> </Col>
                <Col md={6}>{count}</Col>
                <Col md={12}><p>{flag && 'Flag is true and count is Five'}</p></Col>
            </Row>
        </Container>
    )
}

export default FunctionalBasedComponent15;