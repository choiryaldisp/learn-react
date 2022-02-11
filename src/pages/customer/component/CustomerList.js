import {useNavigate, useParams} from "react-router-dom";
// import { withRouter } from "../../HOC/withRouter";

export const CustomerList = ()=>{
    const params = useParams();
    const navigate = useNavigate()
    console.log("PARAMS",params);
    return(
      <>
      <h2>Customer name: {params.name}</h2>
      <button onClick={()=>navigate('form')}>Add Customer</button>
      </>
    )
}