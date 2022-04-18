import React, {Component} from 'react';
import axios from 'axios'

export default class Alaki extends Component {


    state={
        users:[],
        leading: true
    }

    getData = () => {
        setTimeout(()=>{
            axios({
                url: 'https://reqres.in/api/users?page=2',
                method: 'Get'
                /*            data:{},
                            header:{}*/
            }).then((response) => {
                this.setState({
                    users: response.data.data,
                    loading: false
                })
            }).catch((error) => {
                console.log(error)
            })
        },1000)
    }

    componentDidMount() {
        // this.getData();
    }

    render() {
        const {users, loading} = this.state;
        return (
            <div>
                <ul>
                    {
                        !loading ?
                            users.map((element,index)=>{
                                return(
                                    <li key={index.toString()}>{element.first_name} {element.last_name}</li>
                                )
                            })
                            :
                            'Loading...'
                    }
                </ul>

            </div>
        )
    }

}
