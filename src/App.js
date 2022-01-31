import React, {Component} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import BodyComponent from './BodyComponent'
// import ChildComponent from './ChildComponent'
// import Count from './Count'
import logo from './logo.svg'
// import Count from './Count'
import Trainees from './Trainees'
//class
//function 

// option 1
// class App extends React.Component{

// }

// option 2
class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      message : ''
    }
  }

  getMessage = (msg) => {
    this.setState({
      message : msg
    })
  }


  render(){
    return(
     <div className='App'>
       <header className='App-header'>
         <img src={logo} className='App-logo' alt='logo'/>
       </header>
       <Trainees/>
       {/* <h1>{this.state.message}</h1> */}
       {/* <ChildComponent name={"Asep"} callback={this.getMessage}/> */}
       {/* <Count callback={this.getMessage}/> */}
     </div>
    );
  }
  
}





export default App;