import { useDispatch } from "react-redux"
import ActionType from "../redux/ActionType"

const ButtonDecrement = () =>{
    const dispatch = useDispatch()
    return(
        <>
            <button onClick={()=>dispatch({type: ActionType.MINUS})}>-</button>
        </>
    )
}

export default ButtonDecrement