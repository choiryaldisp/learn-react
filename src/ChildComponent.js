import { Component } from "react";
import GrandChildComponent from "./GrandChildComponent";

class ChildComponent extends Component{
    message = 'This is message from child component'

    sendPropsCallback = () => {
        this.props.callback(this.message)
    }

    render(){
        return(
            <div>
                {/* <h1>{this.props.name}</h1>
                <h2>{this.message}</h2> */}
                <button onClick={this.sendPropsCallback} type="button" className="btn btn-warning">Click Child</button> 
                <GrandChildComponent callback = {this.props.callback}/>
            </div>
        )
    }
}

export default ChildComponent