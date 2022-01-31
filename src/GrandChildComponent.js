import { Component } from "react";
class GrandChildComponent extends Component{
    message = 'This is message from grand child component'

    sendPropsCallback = () => {
        this.props.callback(this.message)
    }

    render(){
        return(
            <button onClick={this.sendPropsCallback} type="button" className="btn btn-primary" >Click Grand Child</button>
        )
    }
}

export default GrandChildComponent