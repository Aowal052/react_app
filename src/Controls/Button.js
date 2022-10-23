import React, { useState } from "react";
import { makeStyles,Button as MuiButton } from "@material-ui/core";

const useStyle = makeStyles(theme=> ({
    root:{
        '& .MuiFormControl_root':{
           textTransform:'none'
        }
    }
}))

export default function Button(props){
    const{children,color,variant,onClick, className, ...other} = props;
    const classes = useState();

    return(
        <MuiButton
        className={classes.root + '' + (className || '')}
        variant={variant || "contained"}
        color = {color || "default"}
        onClick = {onclick}
        {...other}>
            {children}
        </MuiButton>
    )
}