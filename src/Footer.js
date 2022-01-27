import { Component } from "react";

class Footer extends Component{
    render(){
        return(

                <footer className="bg-light text-center text-lg-start"> 
                    <div className="text-center p-3" style={{backgroundColor : "rgba(0, 0, 0, 0.2)"}} > ©️ 2022 Copyright : 
                        <a className="text-dark" href="https://enigmacamp.com/"> enigmacamp.com </a> 
                    </div> 
                </footer> 
        )
    }
}

export default Footer