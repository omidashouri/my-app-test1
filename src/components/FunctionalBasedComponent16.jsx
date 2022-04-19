import React, {useContext} from "react";
import {Button, Col, Container, Row} from "reactstrap";
import {ContextBackGroundColor} from "../App";


function FunctionalBasedComponent16() {

    const myColor = useContext(ContextBackGroundColor);
    console.log(myColor)
    return (
        <Container>
            <Row>
                <Col md={6}> </Col>
                <Col md={6}></Col>
                <Col md={12}><Button style={{backgroundColor:myColor}}>Hiiiii</Button></Col>
            </Row>
        </Container>
    )
}

export default FunctionalBasedComponent16;