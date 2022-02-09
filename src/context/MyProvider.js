import { Component } from "react";
import ActionType from "./actionType";
import RootContext from "./RootContext";


class MyProvider extends Component{
    state = {
        globalNumber: 0,
        toDoList:[
          {
            desc : "Maen",
            done : false
          },
          {
            desc : "Makan",
            done : false
          },
          {
            desc : "Tidur",
            done : false
          },
        ]
      }
    
      dispatch = (action)=>{
        if(action.type === "PLUS"){
          this.setState({globalNumber : this.state.globalNumber + 1})
        }else if (action.type === "MINUS"){
          this.setState({globalNumber : this.state.globalNumber - 1})
        }else if (action.type === ActionType.ADD){
          this.setState({
            toDoList: [...this.state.toDoList, {...action.newTodo}]
          })
        }else if(action.type === ActionType.DELETE){
          this.setState({
            toDoList: this.state.toDoList.filter(function(element, idx, arr){
              return idx !== action.index
            })
          })
        }else if(action.type === ActionType.FINISH){
          let status = this.state.toDoList[action.index]
          if(status.done){
            status.done = false
          }else{
            status.done = true
          }
          
          this.setState({status})
        }
      }

    render(){
        return(
            <RootContext.Provider value={{state: this.state, dispatch: this.dispatch}}>
                {this.props.children}
            </RootContext.Provider>
        )
    }
}

export default MyProvider