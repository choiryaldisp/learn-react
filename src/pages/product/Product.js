import {useNavigate} from "react-router-dom"

export const Product = ()=>{
    const navigate = useNavigate()
    return(
      <>
      <h2>Product</h2>
      <button onClick={()=>navigate('form', {state: "test state"})}>Add Product</button>
      </>
    )
  }
  