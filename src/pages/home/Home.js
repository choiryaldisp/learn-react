import { useNavigate } from "react-router-dom"

export const Home = ()=>{
    // Programmatically navigation
    let navigate = useNavigate()
    return(
      <>
      <h2>Home</h2>
      <button onClick={()=>navigate('/customers/asep')}>Customer</button>
      </>
    )
  }
  