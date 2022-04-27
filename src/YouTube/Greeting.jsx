import React, {useContext, useEffect, useState} from "react";
import {Col, Container, Label, Row} from "reactstrap";
import {LocaleContextProvider} from './LocaleContext'
import {ThemeContextProvider} from "./ThemeContext";

export default function Greeting(props) {

    /*    const [name, setName] = useState('omid')
        const [family, setFamily] = useState('ashouri')*/
    const name = useFormInput('omid');
    const family = useFormInput('family')
    const width = useWindowWidth();
    useDocumentTitle(name.value + ' ' + family.value);
    const theme = useContext(ThemeContextProvider);
    const locale = useContext(LocaleContextProvider);


    /*const handleNameChange = (e)=>{
        setName(e.target.value);
    }*/


    return (
        <Container className={theme}>
            <Row md={12}>
                <Col md={3}>
                    <Label>name:</Label>
                </Col>
                <Col md={3}>
                    <input {...name}
                        /*                        value={name}
                                                onChange={handleNameChange}*/
                    />
                </Col>
            </Row>
            <Row md={12}>
                <Col md={3}>
                    <Label>family:</Label>
                </Col>
                <Col md={3}>
                    <input {...family}
                        /*                        value={family}
                                                onChange={handleFamilyChange}*/
                    />
                </Col>
            </Row>
            <Row md={12}>
                {locale}
            </Row>
            <Row md={12}>
                <Col md={3}>
                    <Label>Width:</Label>
                </Col>
                <Col md={3}>
                    <input
                        value={width}
                    />
                </Col>
            </Row>
        </Container>
    );
}


function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    function handleChange(e) {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange
    }
}

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;
    });
}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
    return width;
}


