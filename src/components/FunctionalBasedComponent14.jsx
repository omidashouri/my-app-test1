import React, {useState} from "react";
import {Button, Col, Container, Row} from "reactstrap";


function FunctionalBasedComponent14() {

    const [count, setCount] = useState(0);


    const handleCounter = () => {
        setCount(((prevState)=> prevState + 1))
    };

    return (
        <Container>
            <Row>
                <Col md={6}><Button onClick={handleCounter} color={'success'}>Counter</Button> </Col>
                <Col md={6}>{count}</Col>
            </Row>
        </Container>
    )
}

export default FunctionalBasedComponent14;