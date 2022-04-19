import React, {Component} from "react";
import {Button, Col, Container, Form, Input, Row} from "reactstrap";

class ClassBasedComponent extends Component {



    /*    state = {
            count: 0,
            flag: false
        }

        handleCount = ()=>{
            const {count} = this.state;
            this.setState({
                count: count+1
            },()=>{
                console.log(count)
            })
        }

        componentDidMount(prevProps, prevState) {

        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if(prevState && prevState.count !== this.state.count && this.state.count === 10){
                this.setState({
                    flag: true
                })
            }
        }*/


/*    state = {
        formData :{
            name : '',
            age:0
        },
        finalFormData : {}
    }

    handleNameChange =(event)=> {
        const {value} = event.target;
        this.setState(prevState=>({
            formData : {
                ...prevState.formData,
                name : value
            }
        }))
    }

    handleAgeChange = (event)=> {
        const {value} = event.target;
        this.setState(prevState=>({
            formData : {
                ...prevState.formData,
                age : value
            }
        }))
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        const {formData} = this.state;
        this.setState(prevState=>({
            finalFormData : {
                ...prevState.finalFormData,
                ...formData
            }
        }))
    }*/

    state = {
        formData: {
            name: '',
            age: 0,
        },
        finalFormData: {
        }
    };

    handleChange = (event)=>{
/*        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
        console.log(name+''+value)*/

        const {name,value} = event.target
        this.setState((prevState)=>({
            formData : {
                ...prevState.formData,
                [name]:value
            }
        }))
        console.log(event.target.state)
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        console.log(event.target)
        const {formData} = this.state
        console.log(formData)
        this.setState((prevState)=>({
            ...prevState,
            finalFormData:{
                ...prevState.finalFormData,
                ...formData
            },
            formData: {
                name:'',
                age:0
            }
        }))
        console.log(this.state)
    }


    render() {
        // console.log(this.state)
        const {name, age } = this.state.formData;
        return (
            <Container>
                {/*Class based component example*/}

                {/*<button onClick={this.handleCount}>Click button</button>
                {
                    this.state.flag && <p>Flag is true</p>
                }*/}

{/*                                <form onSubmit={this.handleSubmit}>
                    <input name="name" placeholder="name" type={"text"} value={this.state.formData.name} onChange={this.handleNameChange}/>
                    <input name={"age"} placeholder={"age"} type={"number"} value={this.state.formData.age} onChange={this.handleAgeChange}/>
                    <button type={"submit"} aria-label={"submit"}>Submit</button>
                </form>
                {
                    this.state.finalFormData && Object.keys(this.state.finalFormData).length>0
                }
                final Data is {this.state.finalFormData.name} and {this.state.finalFormData.age}*/}

                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Input placeholder={'name'} name={'name'} value={name} type={'text'} onChange={this.handleChange}/>
                            </Col>
                            <Col md={6}>
                                <Input placeholder={'age'} name={'age'} value={age} type={'number'} onChange={this.handleChange}/>
                            </Col>
                            <Col md={12}>
                                <Button type={'submit'} color={'success'} aria-label={'submit'}>Save</Button>
                            </Col>
                        </Row>
                    </Form>
                <Row>
                    <Col md={12}>
                        {
                            this.state.finalFormData && Object.keys(this.state.finalFormData).length > 0
                        }
                        <p>{this.state.finalFormData.name}  {this.state.finalFormData.age}</p>
                    </Col>
                </Row>

            </Container>
        )
    }


}

export default ClassBasedComponent;