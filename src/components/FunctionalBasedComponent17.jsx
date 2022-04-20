import React, {useContext, useReducer} from "react";
import {Button, Col, Container, Row} from "reactstrap";
import {ContextBackGroundColor} from "../App";
import {type} from "@testing-library/user-event/dist/type";


const initialState = {
    flag: false
}

const myReducer = (state, action) => {
    switch (action.type) {
        case 'changeme':
            console.log(state, action);
            return {
                ...state,
                flag: !state.flag
    }
        default:
            return state;
    }
}


function FunctionalBasedComponent17() {


    const [state, dispatch] = useReducer(myReducer, initialState);

    return (
        <Container>
            <Row>
                <Col md={6}> </Col>
                <Col md={6}></Col>
                <Col md={12}><Button onClick={() => dispatch({type: "changeme"})}>Hiiiii</Button></Col>
            </Row>
        </Container>
    )
}

export default FunctionalBasedComponent17;