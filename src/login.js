import { Component } from "react";

class LoginScreen extends Component{
    render(){
        return(
            <div className="container">
                <div className="row flex-end">
                <div className='col-md-offset-12 col-md-12'>
                    <div className='form-login float-end'>
                    <h2>Login Page</h2>
                    <div className="mb-2">
                        <label htmlFor="formGroupExampleInput" className="form-label">Username</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter username"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                        <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Enter password" size="25"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default LoginScreen