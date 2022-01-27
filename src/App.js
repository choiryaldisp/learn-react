import React, {Component} from 'react'
import './MyStyle.css'
import './undraw_male_avatar_323b.svg' // with import
import  'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import LoginScreen from './login'
import NavbarScreen from './NavbarScreen'
import Footer from './Footer'
//class
//function 

// option 1
// class App extends React.Component{

// }

// option 2
class App extends Component{

  getButtonName() {
    return "Kepencet"  
  }

  buttonClick = "Click Me";

  render(){

    return(
      <>
        <NavbarScreen/>
        <LoginScreen/>
        <Footer/>
      </>
    );
  }
  
}

export default App;