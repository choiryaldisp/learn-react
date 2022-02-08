import logo from './logo.svg';
import './App.css';
import {Component, createContext} from 'react';
import FirstCounter from './FirstCounter';
import SecondCounter from './SecondCounter';

export const RootContext = createContext();
const Provider = RootContext.Provider;

class App extends Component{

  state = {
    globalNumber: 0
  }

  dispatch = (action)=>{
    if(action.type === "PLUS"){
      this.setState({globalNumber : this.state.globalNumber + 1})
    }else if (action.type === "MINUS"){
      this.setState({globalNumber : this.state.globalNumber - 1})
    }
  }

  render(){
    return(
      <Provider value={{state: this.state, dispatch: this.dispatch}}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </header>

          <div className='container'>
            <h1>{this.state.globalNumber}</h1>
            <FirstCounter/>
            <SecondCounter/>
          </div>
        </div>
      </Provider>
    )
  }
}


export default App;
