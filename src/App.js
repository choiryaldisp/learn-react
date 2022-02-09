import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
// import FirstCounter from './FirstCounter';
// import SecondCounter from './SecondCounter';
import FormInput from './FormInput';
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoList from './ToDoList';
import MyProvider from './context/MyProvider';

class App extends Component{

  render(){
    return(
      <MyProvider>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </header>

          <div className='container'>
            <div className='row'>
              <div className='col col-md-auto'>
                <FormInput/>
              </div>
              <div className='col'>
                <ToDoList/>
              </div>
            </div>
            
            {/* <h1>{this.state.globalNumber}</h1>
            <FirstCounter/>
            <SecondCounter/> */}
          </div>
        </div>
      </MyProvider>
    )
  }
}


export default App;
