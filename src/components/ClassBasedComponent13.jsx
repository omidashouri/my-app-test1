import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";

class ClassBasedComponent extends Component {

    state= {
        data:[]
    }

    componentDidMount() {
        this.getData();
    }

    getData = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        this.setState({
            data : data
        })
    }

    render() {

        return (
            <Container>

                {
                    this.state.data && this.state.data.length > 0 ?
                        this.state.data.map((item,index)=>(
                            <Row>
                                <Col md={12}>
                                    <p key={`${item.id}${index}`}>{item.title}</p>
                                </Col>
                            </Row>
                        ))
                        :null
                }

{/*                    <Form onSubmit={this.handleSubmit}>
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
                </Row>*/}

            </Container>
        )
    }


}

export default ClassBasedComponent;