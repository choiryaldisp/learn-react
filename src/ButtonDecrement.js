const ButtonDecrement = (props) =>{
    return(
        <>
            <h1>{props.number}</h1>
            <button onClick={props.callDecrement}>-</button>
        </>
    )
}

export default ButtonDecrement