import { Component } from "react";
import ActionType from "./context/actionType";
import RootContext from "./context/RootContext";

class FormInput extends Component{
    state = {
        desc:"",
        done:false
    }

    handleChange=(event)=>{
        this.setState({desc: event.target.value})
    }
    
    handleSubmit=(event)=>{
        event.preventDefault()
    }

    onClick=(dispatch)=>{
        dispatch({type: ActionType.ADD, newTodo: this.state})
    }

    render(){
        return(
            <RootContext.Consumer>
                {
                    (value) =>{
                        return(
                            <div>
                                <div className="card">
                                    <div className="card-header"><h4>Form Input</h4></div>
                                    <div className="card-body">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <label>To Do</label>
                                                <input type="textarea" className="form-control" onChange={this.handleChange} placeholder="To do..."/>
                                            </div>
                                            <button type="submit" className="btn btn-primary" onClick={()=>this.onClick(value.dispatch)}>Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </RootContext.Consumer>
            
        )
    }
}

export default FormInput