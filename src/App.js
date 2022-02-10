import './App.css'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonIncrement from './component/ButtonIncrement';
import { createContext, useReducer } from 'react';
import ActionType from './redux/ActionType';

export const RootContext = createContext()
const initial = {nilai: 5}

const reducer = (state, action) =>{
  switch (action.type) {
    case ActionType.PLUS:{
        return{
            ...state,
            nilai: state.nilai+1
        }
    }
    case ActionType.MINUS:{
        if(state.nilai>0){
            return{
            
                ...state,
                nilai: state.nilai-1
            }
        }else{
            return state
        }   
    }
    case ActionType.ADD:{
        return{
            ...state,
            todos: [...state.todos, {...action.payload}]
        }
    }
    default: return state
  }
}

const App=()=>{
  const[angka, dispatch] = useReducer(reducer, initial)
  
  const handleIncrement = (data) =>{
    dispatch(data)
  }

  return(
    <RootContext.Provider value={{nilai: angka, dispatch: handleIncrement}}>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo'/>
        </header>
        <br/>
        <ButtonIncrement/>
      </div>
    </RootContext.Provider>
  );

}

export default App;