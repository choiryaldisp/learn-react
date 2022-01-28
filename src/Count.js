import { Component } from "react";

class Count extends Component{
    constructor(props){
        super(props) // merujuk ke parent (karena extend dari Component, maka parentnya adalah Component)
        this.state = {
            number : 0
        }
    }

    // increament(){
    //     // set state berguna untuk melakukan memanipulasi state
    //     // set state maka akan terjadi re-render component
    //     console.log('increament', this);
    //     this.setState({ 
    //         number : this.state.number +1
    //     })
    // }

    increament=()=>{
        // set state berguna untuk melakukan memanipulasi state
        // set state maka akan terjadi re-render component
        console.log('increament', this);
        this.setState({ 
            number : this.state.number + 1
        })
    }

    decreament(){
        console.log('decreament', this);
        if (this.state.number>0){
            this.setState({
                number : this.state.number -1
            })
        }
    }

    // Ketika menggunakan function biasa, 
    // kita menggunakan binding untuk mengikat this yang kita kirimkan menjadi this function tersebut
    // ketika kita menggunakn arrow function akan mengambil this dari induknya 
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
                {/* <button onClick={this.increament.bind(this)}>+</button> */}
                {/* Jika ingin memberikan parameter pada function maka berikan arrow function didepannya terlebih dahulu 
                    Contoh: {()=> this.function(param)}
                */}

                {/* <button onClick={this.increament()}>+</button> ==> mengeksekusi function pada saat itu juga atau pada saat render pertama,
                    sedangkan, 
                    <button onClick={this.increament()}>+</button> ==> akan mengeksekusi pada saat re-rendering atau pada saat melakukan event
                */}

                <button onClick={this.increament}>+</button>
                <button onClick={this.decreament.bind(this)}>-</button>
            </div>
        )
    }
}

export default Count