import { Component, Fragment } from "react";
import ActionType from "./context/actionType";
import RootContext from "./context/RootContext";

class ToDoList extends Component{

    handleColorStatus=(done)=>{
        let style = "";
        if(done){
            style = "line-through" 
        }
        return style
    }
    render(){
        return(
            <RootContext.Consumer>
                {
                    (value)=>{
                        return(
                            <div>
                                <div className="card">
                                    <div className="card-header"><h4>To do list</h4></div>
                                    <div className="card-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    value.state.toDoList.map((element, index)=>{
                                                        return(
                                                            <Fragment key={index}>
                                                                <tr>
                                                                    <th scope="row">{index+1}</th>
                                                                    <td style={{textDecoration: `${this.handleColorStatus(element.done)}`}}>{element.desc}</td>   
                                                                    <td>
                                                                        <button className="btn btn-warning" type="button" onClick={()=>value.dispatch({type: ActionType.FINISH, index: index})}>{element.done ? "UNDONE" : "DONE"}</button>
                                                                        <button className="btn btn-danger" type="button" onClick={()=>value.dispatch({type: ActionType.DELETE, index: index})}>Delete</button>
                                                                    </td>
                                                                </tr>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
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

export default ToDoList