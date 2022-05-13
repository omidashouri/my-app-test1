import React, {useState} from "react";
import {Button, Col, Container, Form, Input, Row} from "reactstrap";

const MyFormInput = () => {

    const [formInput, setFormInput] = useState({
        formData: {
            name: '',
            age: 0,
        },
        finalFormData: {}
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormInput((prevState) => ({
            ...prevState,
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const {formData} = formInput;
        setFormInput((prevState) => (
            {
                ...prevState,
                finalFormData: {
                    ...prevState.finalFormData,
                    ...formData
                },
                formData: {
                    name: '',
                    age: 0
                }
            }));
    }


    const {name, age} = formInput.formData;

    return (
        <Container>
            <Form onSubmit={(e) => handleSubmit(e)}>

                <Row>
                    <Col md={6}>
                        <Input placeholder={'name'} name={'name'} value={name} type={'text'}
                               onChange={(e) => handleChange(e)}/>
                    </Col>
                    <Col md={6}>
                        <Input placeholder={'age'} name={'age'} value={age} type={'number'}
                               onChange={(e) => handleChange(e)}/>
                    </Col>
                    <Col md={12}>
                        <Button type={'submit'} color={'success'} aria-label={'submit'}>Save</Button>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col md={12}>
                    {
                        formInput && formInput.finalFormData && Object.keys(formInput.finalFormData).length > 0
                    }
                    <p> Name is: {formInput.finalFormData.name}</p>
                    <p> Age is: {formInput.finalFormData.age}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default MyFormInput;