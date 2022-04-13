import React, {Component} from "react";

class ClassBasedComponent extends Component{

    state = {
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
    }

    render() {
        return(
            <div>
                {/*Class based component example*/}

                <button onClick={this.handleCount }>Click button</button>
                {
                    this.state.flag && <p>Flag is true</p>
                }
            </div>
        )
    }
}

export default ClassBasedComponent;