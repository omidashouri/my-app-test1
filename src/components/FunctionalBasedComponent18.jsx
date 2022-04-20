import React, {createRef, useContext, useEffect, useReducer} from "react";
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