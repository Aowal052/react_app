import { Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import useStateContext from "../../Hooks/useStateContext";
import stateContext from '../../Hooks/useStateContext'
import ProductForm from "./ProductForm";
import useForm from "../../Hooks/useForm";
import ProductList from "./ProductList";


export const getfreshModelObject = () =>({
    id : 0,
    ProductName : "",
    ProductPrice : ""
})

export default function DashBoard(props){

    const {context, setContext} =   useStateContext()
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getfreshModelObject)
    return(
        <Container maxWidth='md'>
            <ProductForm 
            {...{values,setValues,errors,setErrors,handleInputChange}}
            />
            <ProductList 
            {...{values}}
            />
        </Container>
    )
}