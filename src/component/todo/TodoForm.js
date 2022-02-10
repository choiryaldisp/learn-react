import { useState } from "react"
import { useDispatch } from "react-redux"

export const TodoForm =()=> {
    const [state, setState]=useState({
        newTodo : {
            todo:"",
            desc:"",
        },
    })
    const dispatch = useDispatch()

    const handleChange=(event)=>{
        const name = event.target.name
        const value = event.target.value
        state.newTodo[name] = value
        setState({...state})
    }

    const handleSubmit=(event)=>{
        dispatch({type: "ADD_TODO", payload: state.newTodo})
        event.preventDefault()
    }

    return(
        <>
            <div>
                <div className="card">
                    <div className="card-header"><h4>Form Input</h4></div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Title</label>
                                <input name="todo" type="textarea" className="form-control" onChange={handleChange}  placeholder="Title" required/>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input name="desc" type="textarea" className="form-control" onChange={handleChange} placeholder="To do..." required/>
                            </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}