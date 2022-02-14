import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, updateProduct } from "../service/ProductService";

export const ProductForm = () =>{
    const [newData, setNewData] = useState({})
    const navigate = useNavigate()
    const param = useParams()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getDataById()
    },[])

    const getDataById = async () =>{
        const response = await getProduct(param.id)
        setNewData(response.data)
        console.log("RESPONSE",response);
    }

    const handleChange = (event) =>{
        const id = event.target.id 
        const value = event.target.value
        newData[id] = value
        setNewData({...newData});
    }

    const handleSubmit = async(event) =>{
        try {
            setLoading(true)
            await updateProduct(newData)
            setLoading(false)
            navigate("/products")
        } catch (error) {
            console.log(error);
        }
        
    }

    return(
        <>
            {loading ? <h1>Loading...</h1>
            :   
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h2>Product Form</h2>
                        <div className="form-group row">
                        <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
                        <div className="col-sm-10">
                        <input type="text" value={newData.id || ""} className="form-control" id="id" placeholder="Id" onChange={handleChange}/>
                        </div>
                    </div>
                    <br></br>
                    <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                        <input type="text" value={newData.name || ""} className="form-control" id="name" placeholder="Name" onChange={handleChange}/>
                        </div>
                    </div>
                    <br></br>
                    <input className="btn btn-primary" type="submit" value="Update"/> 
                </form>
            </div>
            }
        </>
    )
}