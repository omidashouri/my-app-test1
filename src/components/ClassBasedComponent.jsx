import React, {Component} from "react";

class ClassBasedComponent extends Component{

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


    state = {
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
    }



    render() {
        return(
            <div>
                {/*Class based component example*/}

                {/*<button onClick={this.handleCount }>Click button</button>
                {
                    this.state.flag && <p>Flag is true</p>
                }*/}

                <form onSubmit={this.handleSubmit}>
                    <input name="name" placeholder="name" type={"text"} value={this.state.formData.name} onChange={this.handleNameChange}/>
                    <input name={"age"} placeholder={"age"} type={"number"} value={this.state.formData.age} onChange={this.handleAgeChange}/>
                    <button type={"submit"} aria-label={"submit"}>Submit</button>
                </form>
                {
                    this.state.finalFormData && Object.keys(this.state.finalFormData).length>0
                }
                final Data is {this.state.finalFormData.name} and {this.state.finalFormData.age}

            </div>
        )
    }


}

export default ClassBasedComponent;