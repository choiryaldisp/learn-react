import { Component } from "react";

class Clock extends Component{
    //class component
    constructor(props){
        super(props)
        this.state={
            date : new Date()
        }
    }

    // lifecycle 
    componentDidMount(){
        console.log("ComponentDidMount called");
        // boleh melakukan setState
        // function ini akan terpanggil ketika komponen sudah terbentuk/ ready
        // dan terpanggil setalah render

        this.timerID = setInterval(
            ()=> this.tick(), 1000 // akan memanggil function tick() setiap 1000ms
        ) //asynchronous function: setTimeOut, setInterval, dll
    }

    componentDidUpdate(){
        // console.log("ComponentDidUpdate called");
    }

    componentWillUnmount(){
        console.log("ComponentWillUnmount called");
        clearInterval(this.timerID)
        // function yang akan dipanggil component di destroy
        // biasanya untuk clean up
    }

    shouldComponentUpdate(){
        console.log("ShouldComponentUpdate called");
        return false
    }

    getSnapshotBeforeUpdate(){
        console.log("GetSnapshotBeforeUpdate called");
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    stop = () => {
        clearInterval(this.timerID)
    }

    render(){
        console.log("Render is called");
        return(
            <div>
                <h1>{this.state.date.toUTCString()}</h1>
                <button onClick={this.stop}>Stop</button>
            </div>
        )
    }
}

export default Clock