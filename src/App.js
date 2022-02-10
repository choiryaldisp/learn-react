import { useState } from 'react';
import './App.css'
// import ButtonDecrement from './ButtonDecrement';
// import ButtonIncrement from './ButtonIncrement';
import FormInput from './FormInput';
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoList from './ToDoList';

function App(){

  // const [number, setNumber] = useState(0)

  const [data, setTodo] = useState({
    todoList:[
      {
        title: "Makan",
        desc: "Makan siang di WMB",
        done: false
      },
      {
        title: "Tidur",
        desc: "Tidur di rumah",
        done: false
      }
    ],
    editTodo:{
      title: "",
      desc:""
    },
    idxEdit:-1,
    updateForm: false
  }
  )

  const getEdit = (index)=>{
    data.editTodo.title = data.todoList[index].title
    data.editTodo.desc = data.todoList[index].desc
    data.idxEdit = index
    data.updateForm = true
    setTodo({...data})
  }

  const dispatch = (action)=>{
    if(action.type==="ADD_TODO"){
      console.log("ADD_TODO");
      data.todoList = [...data.todoList, {...action.newTodo}]
      setTodo({...data})
    }else if(action.type==="DELETE_TODO"){
      var answer = window.confirm("Save data?");
      if (answer) {
        data.todoList = data.todoList.filter(function(element, idx, arr){
          return idx !== action.index 
        })
        setTodo({...data})
      }
      else {
        setTodo(data)
      }

    }else if(action.type === "DONE_TODO"){
      const done = data.todoList[action.index].done 
      if(done){
        data.todoList[action.index].done = false
      }else{
        data.todoList[action.index].done = true
      }
      setTodo({...data})
    }else if(action.type === "UPDATE_TODO"){
      console.log("UPDATE_TODO");
      const keys = Object.keys(action.updateTodo)
      keys.forEach((key, index) => {
        if(action.updateTodo[key]!==""){
          data.todoList[data.idxEdit][key] = action.updateTodo[key]
        } 
      })
      data.idxEdit=-1
      data.editTodo.title=""
      data.editTodo.desc=""
      data.updateForm=false
      setTodo({...data})
    }
  }
  // const increment = ()=>{
  //   setNumber(number+1)
  // }

  // const decrement = ()=>{
  //   if (number>0){
  //     setNumber(number-1)
  //   }
  // }

  return(
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'/>
      </header><br/>
      <div className='container'>
        <div className='row'>
          <div className='col col-md-auto'>
            <FormInput todoList={data} dispatch={dispatch}/>
          </div>
          <div className='col'>
            <ToDoList callEdit={getEdit} todoList={data} dispatch={dispatch}/>
          </div>
        </div>
        
      </div>
      {/* <h1>{number}</h1>
      <button className='btn' onClick={increment}>+</button>
      <button className='btn' onClick={decrement}>-</button>
      <br/><br/>
      <ButtonIncrement number={number} callIncrement={increment}/>
      <ButtonDecrement number={number} callDecrement={decrement}/> */}
    </div>
  );
  
}





export default App;