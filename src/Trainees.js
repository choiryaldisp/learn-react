import { Component } from "react";
import Card from "./Card";
import './Trainee.css'

class Trainees extends Component{

    constructor(props){
        super(props)
        this.state = {
            peoples : [
                {
                    name: "Gde",
                    age: 22, 
                    address: "Jakarta"
                },
                {
                    name: "Wilda",
                    age: 17,
                    address: "Bogor"
                }
            ]
        }
    }

    addComponent = () => {
        let newPeople ={
            name: `New People ${this.state.peoples.length + 1}`,
            age: 25,
            address: "Depok"
        } 

        this.state.peoples.push(newPeople)
        this.setState(this.state)
        console.log(this.state.peoples);
    }

    render(){
        const items = []
        for (let index = 0; index < this.state.peoples.length; index++) {
            items.push(<Card people = {this.state.peoples[index]}/>) 
        }
        return(
            <div>
                {items}
                <div className="card">
                    <button onClick={this.addComponent}>Add Component</button>
                    {/* {items}     */}
                </div>
            </div>
        )
    }
}

export default Trainees