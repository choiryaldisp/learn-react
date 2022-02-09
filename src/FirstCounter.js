import { Component } from "react";
import RootContext from "./context/RootContext";

class FirstCounter extends Component{
    render(){
        return(
            <RootContext.Consumer>
                {
                    (value) => {
                        return(
                            <>
                                <h5>FIRST COUNTER</h5>
                                {/* {value.state.globalNumber}<br/> */}
                                <button className="btn btn-primary" onClick={()=>value.dispatch({type:"PLUS"})}>PLUS</button>
                            </>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

export default FirstCounter