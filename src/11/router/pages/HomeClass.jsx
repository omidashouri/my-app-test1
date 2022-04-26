import {Component} from "react";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
        this.timer = null;
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                time: new Date()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {time} = this.state;
        if(time.getSeconds() % 2){
            return true
        }
    }

    render() {
        return (
            <div>
                <h1>Home {this.state.time.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Home;