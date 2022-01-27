import React, {Component} from 'react'
import './MyStyle.css'
import './undraw_male_avatar_323b.svg' // with import
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarApp from './NavbarApp'
import ProfileApp from './ProfileApp'
import ContentArticle from './ContentArticle'
import FormInputContent from './FormInputContent'
import FooterApp from './FooterApp'
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
      <NavbarApp/>
      <ProfileApp/>
      <ContentArticle/>
      <FormInputContent/>
      <FooterApp/>
      </>
    );
  }
  
}

export default App;