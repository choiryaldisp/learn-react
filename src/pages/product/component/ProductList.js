// import axios from "axios"
import { useEffect} from "react"
import {useNavigate} from "react-router-dom"

export const ProductList = ({bloc})=>{
    const {list, getListProducts, handleDelete} = bloc()
    const navigate = useNavigate()

    useEffect(()=>{
        getListProducts()
    },[])// array kosong untuk menghentikan re-render berulang-ulang

    const deleteList = (data) =>{
        if(window.confirm(`Are you sure to delete ${data.name}`)){
            handleDelete(data)
        }
    }

    return(
        <>
            <div className="container"> 
                <h2>Product List</h2> 
                <button type="button" className="btn btn-success" onClick={()=>navigate('form')}> Add Product </button> 
                <table className="table table-striped"> 
                    <thead> 
                        <tr> 
                            <th scope="col">#</th> 
                            <th scope="col">Id</th> 
                            <th scope="col">Product Name</th> 
                            <th scope="col">Action</th> 
                        </tr> 
                    </thead> 
                    <tbody> 
                        {list.map((product, index) => { return ( 
                        <tr key={product.id}> 
                            <td>{index + 1}</td> 
                            <td>{product.id}</td> 
                            <td>{product.name}</td> 
                            <td>
                                <button className="btn btn-warning" onClick={()=>deleteList(product)}>Delete</button>
                                <button className="btn btn-primary" onClick={()=>navigate(`form/${product.id}`)}>Update</button>
                            </td>
                        </tr> 
                        )})
                        } 
                    </tbody> 
                </table> 
            </div> 
        </>
    )
  }
  