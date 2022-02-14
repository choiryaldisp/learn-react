import { useState } from "react"
import { deleteProduct, getProducts } from "../service/ProductService"

const ProductListBloc = () =>{
    const[list, setList] = useState([])

    const getListProducts = async () =>{
        try {
            const response = await getProducts()
            setList(response.data.products)
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (data)=>{
        try {
            await deleteProduct(data.id)
            await getListProducts()
        } catch (error) {
            console.log(error);
        }
    }

    return {
        list,
        getListProducts,
        handleDelete
    }
}

export default ProductListBloc