import client from "../../../shared/http-client/Client"

const ProductService = () =>{

    const getProducts = async(params)=>{
        const response = await client.get("/products", {params})
        return response
    }

    const getProduct = async (id)=>{
        const response = await client.get(`/products/${id}`)
        return response
    }

    const createProduct = async (newProduct)=>{
        const response = await client.post('/products', newProduct)
        return response
    }

    const updateProduct = async (product) =>{
        const response = await client.put('/products', product)
        return response
    }

    const deleteProduct = async (id)=>{
        const response = await client.delete(`/products/${id}`)
        return response
    }

    return{
        getProduct, 
        getProducts,
        createProduct,
        updateProduct,
        deleteProduct
    }
}

export default ProductService