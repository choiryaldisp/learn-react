import { Component, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import FormInput from "./FormInput";

class ListOfTrainee extends Component{

    constructor(props){
        super(props)
        this.state ={
            trainees : [
                {
                    name: "Jajang",
                    age: 22,
                    email: "jajang@gmail.com", 
                    address: "Jakarta"
                },
                {
                    name: "Agus",
                    age: 17,
                    email: "agus@gmail.com",
                    address: "Bogor"
                },
                {
                    name: "Tatang",
                    age: 19,
                    email: "tatang@gmail.com",
                    address: "Bogor"
                },
                {
                    name: "Ani",
                    age: 18,
                    email: "ani@gmail.com",
                    address: "Bogor"
                },
            ],
            newTrainee : [
                {
                    name: '',
                    age: 0,
                    email: '',
                    address: ''
                }
            ],
            isValid : true, 
            errorName : "",
            errorEmail:""
        }
    }

    handleChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const nameTag = target.name;
        const newInput = this.state.newTrainee;

        newInput[nameTag] = value;

        switch (nameTag) {
            case "name":
                if(value.length >= 5){
                    this.setState({
                        isValid: false,
                        errorName: ''
                    });
                }else{
                    this.setState({
                        isValid: true,
                        errorName: <small className="form-text" style={{color: "red"}}>*Minimum length of this field must be at least 5 character</small>
                    });
                }
                break;
            case "email":
                if(value.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)){
                    this.setState({
                        isValid: false,
                        errorEmail: ''
                    });
                }else{
                    this.setState({
                        isValid: true,
                        errorEmail: <small className="form-text" style={{color: "red"}}>*Invalid email format</small>
                    });
                }
                break;
            default:
                break;
        }
    }

    handleSubmit = (event)=>{
        if(this.state.newTrainee){
            let newInput = {...this.state.newTrainee}
            this.state.trainees.push(newInput)
            this.setState(this.state)
            event.preventDefault() // untuk mencegah terjadinya aksi dari event bawaan DOM
        }
        
    }

    // state = {
    //     trainees : []
    // }
    
    render(){
        // const items = this.state.trainees.map((element, index) => 
        //     <li key={index}>{element}</li>
        // );

        return(
            <>

            <div className="container">
                <div className="row">
                    <FormInput handleChange = {this.handleChange} handleSubmit={this.handleSubmit} stateParent = {this.state}/>
                    <div className="col">
                        <div className="card">
                        <h5 className="card-header">Trainees Data</h5>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr className="table-active">
                                            <th scope="col">No.</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {(!this.state.trainees.length)
                                        ? <p>No value available</p>
                                        : this.state.trainees.map((element, index) => {
                                            return(
                                                <Fragment key={index}>
                                                    <tr>
                                                        <td>{element.name}</td>
                                                        <td>{element.age}</td>
                                                        <td>{element.email}</td>
                                                        <td>{element.address}</td>
                                                    </tr>
                                                </Fragment>
                                            )
                                        })
                                        // : this.state.trainees.map((element, index) => <li key={index}>{element.name}</li>)
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container">
                    <ul>
                        {(!this.state.trainees.length)
                            ? <p>No value available</p>
                            : this.state.trainees.map((element, index) => <li key={index}>{element}</li>)
                        }
                    </ul>
            </div> */}

            </>
            
        )
    }
}

export default ListOfTrainee