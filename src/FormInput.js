import { Component } from "react";

class FormInput extends Component{

    render(){
        const handleChange = this.props.handleChange
        const handleSubmit = this.props.handleSubmit
        const stateParent = this.props.stateParent

        return(
            <>
                <div className="col-md-auto">
                    <div className="card">
                        <h5 className="card-header">Form Input</h5>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input className="form-control" type="text" name="name" placeholder="Name" required onChange={handleChange}></input>
                                    {stateParent.errorName} 
                                </div><br/>
                                <div className="form-group">
                                    <label>Age</label>
                                    <input className="form-control" type="number" name="age" placeholder="Age" min={1} required onChange={handleChange}></input>
                                </div><br/>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input className="form-control" type="email" name="email" placeholder="Email" required onChange={handleChange}></input>
                                    {stateParent.errorEmail}
                                </div><br/>
                                <div className="form-group">
                                <label>Address</label>
                                    <input className="form-control" type="text" name="address" placeholder="Address" required onChange={handleChange}></input>
                                </div><br/> 

                                {/* <input type="submit" value="submit" onClick={this.handleSubmit}></input> */}
                                <button className="btn btn-primary" type="submit" value="submit" disabled={stateParent.isValid}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default FormInput