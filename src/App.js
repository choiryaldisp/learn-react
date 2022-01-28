import React, {Component} from 'react'
import './App.css'
import BodyComponent from './BodyComponent'
import Count from './Count'
import logo from './logo.svg'
//class
//function 

// option 1
// class App extends React.Component{

// }

// option 2
class App extends Component{
  name = "Asep"
  address = "Bandung"

  render(){
    return(
     <div className='App'>
       <header className='App-header'>
         <img src={logo} className='App-logo' alt='logo'/>
       </header>
       <Count/>
       {/* <BodyComponent name={this.name} address={this.address}/> 
       <BodyComponent name="Dadang" address="Jakarta" /> 
       <BodyComponent name="Dodit" address="Jambi" />  */}
     </div>
    );
  }
  
}





export default App;