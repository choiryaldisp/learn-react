import {useNavigate, useParams} from "react-router-dom";
// import { withRouter } from "../../HOC/withRouter";

export const Customer = ()=>{
    // const location = useLocation();
    // console.log("LOCATION",location);
    const params = useParams();
    const navigate = useNavigate()
    console.log("PARAMS",params);
    return(
      <>
      <h2>Customer</h2>
      <h4>{params.name}</h4>
      <button onClick={()=>navigate('form')}>Add Customer</button>
      </>
    )
}

