import { Component } from "react";
class CounterButtonPlus extends Component{

    increament = () => {
        this.props.callback(this.props.value + 1)
    }

    render(){
        return(
            <button onClick={this.increament}>+</button>
        )
    }
}

export default CounterButtonPlus