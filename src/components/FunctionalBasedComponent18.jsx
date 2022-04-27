import React, {createRef, useEffect} from "react";
import {Col, Container, Row} from "reactstrap";


function FunctionalBasedComponent18() {

    const inputRef = createRef(null);

    useEffect(() => {
        console.log(inputRef.current)
        inputRef.current.focus()
    }, []);

    return (
        <Container>
            <Row>
                <Col md={6}> </Col>
                <Col md={6}></Col>
                <Col md={12}><input ref={inputRef} name={'name'} type={'text'} placeholder={'name'}/></Col>
            </Row>
        </Container>
    )
}

export default FunctionalBasedComponent18;