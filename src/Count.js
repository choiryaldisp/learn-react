import { Component } from "react";

class Count extends Component{
    constructor(props){
        super(props) // merujuk ke parent (karena extend dari Component, maka parentnya adalah Component)
        this.state = {
            number : 0
        }
    }

    increament(){
        // set state berguna untuk melakukan memanipulasi state
        // set state maka akan terjadi re-render component
        this.setState({ 
            number : this.state.number +1
        })
    }

    render(){
        console.log('count', this);
        return(
            <div>
                <h1>{this.state.number}</h1>
                {/* melakukan binding saat memanggil function supaya yang dipanggil oleh function 
                adalah 'this' milik Count
                
                - Function biasa memiliki 'this' sendiri
                - Arrow function tidak memiliki this sendiri
                - jadi pada saat function increament dipanggil harus di binding terlebih dahulu


                */}
                <button onClick={this.increament.bind(this)}>+</button>
            </div>
        )
    }
}

export default Count