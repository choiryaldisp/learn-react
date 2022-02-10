import './App.css'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { TodoList } from './component/todo/TodoList';
import { TodoForm } from './component/todo/TodoForm';

const App=()=>{

  return(
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'/>
      </header>
      <br/>
      <div className='container'>
        <div className='row'>
          <div className='col col-md-auto'>
            <TodoForm/>
          </div>
          <div className='col'>
            <TodoList/>
          </div>
        </div>
        
      </div>
    </div>
  );
  
}

export default App;