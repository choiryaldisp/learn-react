import { Fragment } from "react"

const ToDoList = (props) =>{

    const handleDone=(done)=>{
        let style = "";
        if(done){
            style = "line-through" 
        }
        return style
    }
    return(
        <>
            <div className="card">
                <div className="card-header"><h4>To do list</h4></div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.todoList.todoList.map((element, index)=>{
                                    return(
                                        <Fragment key={index}>
                                            <tr>
                                                <th scope="row">{index+1}</th>
                                                <td style={{textDecoration: `${handleDone(element.done)}`}}>{element.title}</td>
                                                <td style={{textDecoration: `${handleDone(element.done)}`}}>{element.desc}</td>   
                                                <td>
                                                    <button className="btn btn-primary" type="button" onClick={()=>props.dispatch({type: "DONE_TODO", index: index})}>{element.done ? "Undone" : "Done"}</button>
                                                    <button className="btn btn-danger" type="button" onClick={()=>props.dispatch({type: "DELETE_TODO", index: index})}>Delete</button>
                                                    <button className="btn btn-success" type="button" onClick={()=>props.callEdit(index)}>Edit</button>
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
        </>
    )
}

export default ToDoList