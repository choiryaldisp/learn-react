import { Component } from "react";
import CounterButtonMinus from "./CounterButtonMinus";
import CounterButtonPlus from "./CounterButtonPlus";

class Count extends Component{
    constructor(props){
        super(props) // merujuk ke parent (karena extend dari Component, maka parentnya adalah Component)
        this.state = {
            number : 0
        }
    }

    sendPropsCallback = () => {
        this.props.callback(this.number)
    }

    updateStateNumber = (updatedNumber) =>{
        this.setState({
            number : updatedNumber
        })
    }

    // Ketika menggunakan function biasa, 
    // kita menggunakan binding untuk mengikat this yang kita kirimkan menjadi this function tersebut
    // ketika kita menggunakn arrow function akan mengambil this dari induknya 
    render(){

        return(
            <div>
                <h1>{this.state.number}</h1>
                {/* melakukan binding saat memanggil function supaya yang dipanggil oleh function 
                adalah 'this' milik Count
                
                - Function biasa memiliki 'this' sendiri
                - Arrow function tidak memiliki this sendiri
                - jadi pada saat function increament dipanggil harus di binding terlebih dahulu

                */}
                {/* <button onClick={this.increament.bind(this)}>+</button> */}
                {/* Jika ingin memberikan parameter pada function maka berikan arrow function didepannya terlebih dahulu 
                    Contoh: {()=> this.function(param)}
                */}

                {/* <button onClick={this.increament()}>+</button> ==> mengeksekusi function pada saat itu juga atau pada saat render pertama,
                    sedangkan, 
                    <button onClick={this.increament()}>+</button> ==> akan mengeksekusi pada saat re-rendering atau pada saat melakukan event
                */}

                <CounterButtonPlus callback = {this.updateStateNumber} value = {this.state.number}/>
                <CounterButtonMinus callback = {this.updateStateNumber} value = {this.state.number} />
                {/* <button onClick={this.decreament.bind(this)}>-</button> */}
            </div>
        )
    }
}

export default Count