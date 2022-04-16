import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Input, Row, Table} from "reactstrap";

class Users extends Component {


    render() {
        return (
            <Container>
                <Row>
                    <Col md={6}>
                        <Input placeholder={'First Name'}></Input>
                    </Col>
                    <Col md={6}>
                        <Input placeholder={'Last Name'}></Input>
                    </Col>
                    <Col md={12}>
                        <Button className={'d-block w-100'} color={'success'}>Save</Button>
                    </Col>
                </Row>
                <Row>
                    <Table dark striped bordered>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Family</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        )
    }
}

export default Users;