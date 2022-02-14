import { useFormik } from "formik";
import { useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from 'yup'

export const ProductForm = ({bloc}) =>{
    const {
        loading,
        getDataById, 
        handleUpdate,
        handleSubmit
    } = bloc()

    const param = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        getDataById(param.id, formik)
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
                handleUpdate(formik)
                navigate("/products")
            }else{
                handleSubmit(formik)
                navigate("/products")
            }
        }
    })

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