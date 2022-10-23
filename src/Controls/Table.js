import React from "react";
import { Table as MuiTable } from "@material-ui/core";

export default function Table(props){
    return(
        <MuiTable>
            {props.children}
        </MuiTable>
    )
}