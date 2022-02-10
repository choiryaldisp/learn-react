import { useContext } from "react";
import { RootContext } from "../App";
import ActionType from "../redux/ActionType";

const ButtonDecrement = () =>{
    const data = useContext(RootContext)
    return(
        <>
            <h1>{data.nilai.nilai}</h1>
            <button onClick={()=>data.dispatch({type: ActionType.MINUS})}>+</button>
        </>
    )
}

export default ButtonDecrement