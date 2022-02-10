import { useDispatch } from "react-redux"
import ActionType from "../redux/ActionType"

const ButtonIncrement = () =>{
    const dispatch = useDispatch()
    return(
        <>
            <button onClick={()=>dispatch({type: ActionType.PLUS})}>+</button>
        </>
    )
}

export default ButtonIncrement