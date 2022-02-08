import { Component } from "react";
import { RootContext } from "./App";

class SecondCounter extends Component{
    render(){
        return(
            <RootContext.Consumer>
                {
                    (value) => {
                        return(
                            <>
                                <h5>SECOND COUNTER</h5>
                                {/* {value.state.globalNumber}<br/> */}
                                <button className="btn btn-primary" onClick={()=>value.dispatch({type:"MINUS"})}>MINUS</button>
                            </>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

export default SecondCounter