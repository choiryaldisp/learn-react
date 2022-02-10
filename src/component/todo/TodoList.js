import { Fragment } from "react"
import { useSelector } from "react-redux"

export const TodoList = () =>{
    const todos = useSelector((state)=> state.todos)
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
                                todos.map((element, index)=>{
                                    return(
                                        <Fragment key={index}>
                                            <tr>
                                                <th scope="row">{index+1}</th>
                                                <td>{element.todo}</td>
                                                <td>{element.desc}</td>   
                                                <td>
                                                    {/* <button className="btn btn-primary" type="button" onClick={()=>props.dispatch({type: "DONE_TODO", index: index})}>{element.done ? "Undone" : "Done"}</button>
                                                    <button className="btn btn-danger" type="button" onClick={()=>props.dispatch({type: "DELETE_TODO", index: index})}>Delete</button> */}
                                                    <button className="btn btn-success" type="button">Edit</button>
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