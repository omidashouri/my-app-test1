import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Input, Row, Spinner, Table} from "reactstrap";
import axios from "axios";
import {handleChange} from "./inputChange";
import Swal from "sweetalert2";


class Users extends Component {


    state = {
        users: [],
        loading: true,
        name: '',
        family: '',
        disable: false
    }


    componentDidMount() {
        this.getusers();
    }

    getusers = () => {

        this.setState({
            loading: true
        })

        axios({
            url: 'http://localhost:3000/users'
        }).then(response => {
            this.setState({
                users: response.data,
                loading: false
            })
        }).catch(error => {
            console.log(error.toString())
        })
    }

    submit = async () => {

/*        axios({
            url: 'http://localhost:3000/users',
            method: 'POST',
            data: {
                name: this.state.name,
                family: this.state.family
            }
        }).then(response => {
            this.setState({
                disable: false,
                name:'',
                family:''
            })
            this.getusers();
        }).catch(error => {
            console.log(error)
        })*/

        try{
            const {name, family} = this.state;
            if(name === ''){
                Swal.fire({
                    color:'warning',
                    text:'Name o por kon',
                    icon:'warning'
                })
                return;
            }
            if(family === ''){
                Swal.fire({
                    color:'warning',
                    text:'Family o por kon',
                    icon:'warning'
                })
                return;
            }

            this.setState({disable:true})

            //WE DO NOT NEED TO RESULT HERE
            // const result =
                await axios({
                url: 'http://localhost:3000/users',
                method: 'POST',
                data: {
                    name: name,
                    family: family
/*                   OR → because both are same
                   name,
                   family*/
                }
            });
            this.setState({
                disable: false,
                name:'',
                family:''
            })
            this.getusers();
        }catch (error){
            console.log(error)
        }


    }


    render() {
        const {users, loading, name, family, disable} = this.state;

        return (
            <Container>
                <Row>
                    <Col md={6}>
                        <Input onChange={handleChange.bind(this)} name={'name'} value={name}
                               placeholder={'First Name'}></Input>
                    </Col>
                    <Col md={6}>
                        <Input onChange={handleChange.bind(this)} name={'family'} value={family}
                               placeholder={'Last Name'}></Input>
                    </Col>
                    <Col md={12}>
                        <Button disabled={disable} onClick={this.submit} className={'d-block w-100'}
                                color={'success'}>Save</Button>
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
                        {
                            !loading ?
                                users.map((user, key) => {
                                    return (
                                        <tr key={key.toString()}>
                                            <td>{key + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.family}</td>
                                        </tr>
                                    )
                                }) :
                                <tr>
                                    <td colSpan={3} className={'text-center'}><Spinner color={'warning'}/></td>
                                </tr>

                        }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        )
    }
}

export default Users;