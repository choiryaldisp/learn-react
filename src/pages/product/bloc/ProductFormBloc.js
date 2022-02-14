import { useFormik } from "formik"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { createProduct, getProduct, updateProduct } from "../service/ProductService"

const ProductFormBloc = () =>{
    const [loading, setLoading] = useState(false)
    
    const navigate = useNavigate()

    const getDataById = async (id, formik) =>{
        if(id){
            const response = await getProduct(id)
            formik.values.id = response.data.id
            formik.values.name = response.data.name
            formik.setFieldValue()
        }
    }

    const handleUpdate = async(formik) =>{
        try {
            setLoading(true)
            await updateProduct(formik.values)
            setLoading(false)
            navigate("/products")
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (formik) =>{
        try {
            setLoading(true)
            await createProduct(formik.values)
            setLoading(false)
            navigate("/products")
        } catch (error) {
            console.log(error);
        }
    }

    return{
        loading,
        getDataById, 
        handleUpdate,
        handleSubmit
    }
}

export default ProductFormBloc