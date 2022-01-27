import { Component } from "react";

class FormInputContent extends Component{
    render(){
        return(
            <div className='container'><hr/>
                <div className="content col-md-6" >
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Tittle</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Write tittle..."/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1">Article content</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Write content...' rows="3"></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default FormInputContent