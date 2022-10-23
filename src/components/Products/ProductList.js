import { ListItem, List, ListItemText, TableHead, TableRow, TableBody, TableCell } from "@material-ui/core";
import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { createAPIEndpoint, END_POINT } from "../../api/api";
import Table from "../../Controls/Table";
import useForm from "../../Hooks/useForm";
import { getfreshModelObject } from "./DashBoard";
import ProductForm from "./ProductForm";

export default function ProductList({ ...props }) {
    const [currentId, setCurrentId] = useState(0)
    const [currentItem, setCurrentItem] = useState()
    const [productItems, setProductItems] = useState([]);
    useEffect(() => {
        createAPIEndpoint(END_POINT.getAllProducts)
            .fetchAll()
            .then(res => {
                setProductItems(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const data = {
            "id": currentId
        }
        if (currentId > 0) {
            createAPIEndpoint(END_POINT.getProductById)
                .fetchById(data)
                .then(res => {
                    console.log(res)
                    setCurrentId(res.data.id)
                    console.log(res.data)
                    setCurrentItem(res.data)
                })
                .catch(err => console.log(err))
        }
    }, [currentId])

    // const EditProduct = id =>{


    // }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Product Price</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    productItems.map((product, idx) => (
                        <TableRow
                            key={idx}
                        >
                            <TableCell>{idx + 1}</TableCell>
                            <TableCell>{product.productName}</TableCell>
                            <TableCell>{product.productPrice}</TableCell>
                            <TableCell><Button
                                onClick={e => setCurrentId(product.id)}
                            ></Button></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        // <List>
        //     {

        //     }
        // </List>
    )
}
