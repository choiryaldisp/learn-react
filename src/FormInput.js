import { useState } from "react"

const FormInput =(props)=>{

    const [state, setState]=useState({
        newTodo : {
            title:"",
            desc:"",
            done:false
        },
        updateTodo:{
            title:"",
            desc:"",
        },
        updateForm: false
    })

    const handleChange=(event)=>{
        const name = event.target.name
        const value = event.target.value
        console.log("ON CHANGE", name,value);
        state.newTodo[name] = value
        setState({...state})
    }

    const handleSubmit=(event)=>{
        props.dispatch({type: "ADD_TODO",newTodo: state.newTodo})
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
                                <input name="title" type="textarea" defaultValue={props.todoList.editTodo.title} className="form-control" onChange={handleChange}  placeholder="Title" required/>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input name="desc" type="textarea" defaultValue={props.todoList.editTodo.desc} className="form-control" onChange={handleChange} placeholder="To do..." required/>
                            </div>
                            {
                                props.todoList.updateForm 
                                ? <button type="button" className="btn btn-primary" onClick={()=>props.dispatch({type: "UPDATE_TODO", updateTodo: state.newTodo})}>Update</button> 
                                : <button type="submit" className="btn btn-primary">Submit</button>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormInput