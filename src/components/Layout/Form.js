import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    root:{
        '& .MuiFormControl_root':{
            width: '90%',
            margin: theme.spacing(1)
        }
    }
}))


export default function Form(props){
    const classes = useState();
    const {children, ...other} = props;

    return(
        <form className={classes.root} novalidation="true" autoComplete="off" {...other}>
            {children}
        </form>
    )
}