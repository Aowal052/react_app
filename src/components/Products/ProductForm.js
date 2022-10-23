import { ButtonGroup, Card, CardContent, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Form from "../Layout/Form";
import { Select, Input, Button as MuiButton} from "../../Controls";
import { Box } from "@mui/system";
import { createAPIEndpoint,END_POINT } from "../../api/api";
import ProductList from "./ProductList";
import useForm from "../../Hooks/useForm";
import { RestoreFromTrash } from "@mui/icons-material";




export default function ProductForm(props) {
    const {values,setValues,errors,setErrors,handleInputChange} = props;
    
    const [currentId, setCurrentId] = useState()
    //values = currentId
    const submitOrder = e => {
        e.preventDefault()
        if (validateForm()) {
            console.log(values)
            createAPIEndpoint(END_POINT.addProduct)
                .post(values)
                .then(res => {
                    setValues(res.data);
                    setCurrentId(res.data.id);
                    RestoreFromTrash()
                })
                .catch(err => console.log(err))
        }
    }
    const {currentItem} = useState()
    const validateForm = () => {
        let temp = {}
        temp.ProductName = values.ProductName != '' ? "" : "this field is required."
        temp.ProductPrice = values.ProductPrice != '' ? "" : "this field is required."
        setErrors({...temp});
        return Object.values(temp).every(x => x === "")
    }
    useEffect(() => {
        if(currentItem!=undefined){
            setValues(currentItem)
        }
    }, [currentId])

    return (
        <Card>
            <CardContent>
                <Box
                sx={{
                    '& .MuiTextField-root': {
                        m: 1,
                        width: '90%'
                    }
                }}>
                    <Form onSubmit={submitOrder}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Input
                                    label="Product Name"
                                    name="ProductName"
                                    values = {values.ProductName}
                                    onChange = {handleInputChange}
                                    error = {errors.ProductName}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    label="Product Price"
                                    name="ProductPrice"
                                    values = {values.ProductPrice}
                                    onChange = {handleInputChange}
                                    error = {errors.ProductName}
                                />
                                <ButtonGroup
                                sx={{
                                    '& .MuiButtonBase-root': {
                                        m: 1,
                                        width: '90%',
                                    }
                                }}>
                                    <MuiButton
                                    size = "large"
                                    type = "submit"
                                    >Submit</MuiButton>
                                </ButtonGroup>
                            </Grid>

                        </Grid>
                    </Form>
                </Box>
            </CardContent>
        </Card>

    )
}