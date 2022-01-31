import { Component } from "react";
class CounterButtonMinus extends Component{

    decreament = () => {
        if (this.props.value>0){
            this.props.callback(this.props.value - 1)
        }   
    }

    render(){
        return(
            <button onClick={this.decreament}>-</button>
        )
    }
}

export default CounterButtonMinus