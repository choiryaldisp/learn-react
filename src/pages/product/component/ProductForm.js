import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct, getProduct, updateProduct } from "../service/ProductService";
import * as Yup from 'yup'

export const ProductForm = () =>{
    // const [newData, setNewData] = useState({})
    const navigate = useNavigate()
    const param = useParams()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getDataById()
    },[])

    const formik = useFormik({
        initialValues: {
            id:"",
            name: ""
        },
        validationSchema: Yup.object({
            id: Yup.string().required("This filed is required"),
            name: Yup.string().required("This filed is required").min(5, "Minimum 5 character")
        }),
        onSubmit: () => {
            if(param.id){
                handleUpdate()
            }else{
                handleSubmit()
            }
        }
    })

    const getDataById = async () =>{
        if(param.id){
            const response = await getProduct(param.id)
            console.log("PARAM",response.data);
            // setNewData(response.data)
            formik.values.id = response.data.id
            formik.values.name = response.data.name
            formik.setFieldValue()
        }
    }

    // const handleChange = (event) =>{
    //     const id = event.target.id 
    //     const value = event.target.value
    //     newData[id] = value
    //     setNewData({...newData});
    // }

    const handleUpdate = async(event) =>{
        try {
            setLoading(true)
            await updateProduct(formik.values)
            setLoading(false)
            navigate("/products")
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (event) =>{
        try {
            setLoading(true)
            await createProduct(formik.values)
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
                <form onSubmit={formik.handleSubmit}>
                    <h2>Product Form</h2>
                        <div className="form-group row">
                        <label htmlFor="inputId" className="col-sm-2 col-form-label">Id</label>
                        <div className="col-sm-10">
                        <input type="text" value={formik.values.id || ""} className="form-control" id="id" name="id" placeholder="Id" onChange={formik.handleChange}/>
                        {formik.errors.id && formik.touched.id ? (
                            <small className="text-danger">{formik.errors.id}</small>
                        )
                        : null}
                        </div>
                    </div>
                    <br></br>
                    <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                        <input type="text" value={formik.values.name || ""} className="form-control" id="name" name="name" placeholder="Name" onChange={formik.handleChange}/>
                        {formik.errors.name && formik.touched.name ? (
                            <small className="text-danger">{formik.errors.name}</small>
                        )
                        : null}
                        </div>
                    </div>
                    <br></br>
                    <input className="btn btn-primary" type="submit" value="Submit"/> 
                </form>
            </div>
            }
        </>
    )
}