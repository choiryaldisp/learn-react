import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { createProduct } from "../service/ProductService";

export const ProductInput = () =>{
    const [newData, setNewData] = useState({})
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleChange = (event) =>{
        const id = event.target.id 
        const value = event.target.value
        newData[id] = value
        setNewData({...newData});
    }

    const handleSubmit = async (event) =>{
        try {
            setLoading(true)
            await createProduct(newData)
            setLoading(false)
            navigate("/products")
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <div>
                {loading ? <h1>Loading...</h1>
                :
                <form onSubmit={handleSubmit}>
                    <h2>Product Form</h2>
                        <div className="form-group row">
                        <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="id" placeholder="Id" onChange={handleChange}/>
                        </div>
                    </div>
                    <br></br>
                    <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" placeholder="Name" onChange={handleChange}/>
                        </div>
                    </div>
                    <br></br>
                    <input className="btn btn-primary" type="submit" value="Input"/> 
                </form>
                }
            </div>
        </>
    )
}