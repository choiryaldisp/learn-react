const ButtonIncrement = (props) =>{
    return(
        <>
            <h1>{props.number}</h1>
            <button onClick={props.callIncrement}>+</button>
        </>
    )
}

export default ButtonIncrement