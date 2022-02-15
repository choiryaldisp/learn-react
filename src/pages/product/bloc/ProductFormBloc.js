import { useState } from "react"
import { useNavigate, useParams} from "react-router-dom"

const ProductFormBloc = (productService) =>{
    const {getProduct, createProduct, updateProduct} = productService()
    const [loading, setLoading] = useState(false)
    const param = useParams()
    const navigate = useNavigate()

    const getDataById = async (formik) =>{
        if(param.id){
            const response = await getProduct(param.id)
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
        param,
        getDataById, 
        handleUpdate,
        handleSubmit
    }
}

export default ProductFormBloc