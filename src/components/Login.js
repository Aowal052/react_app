
import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import Center from "./Center";
import useForm from "../Hooks/useForm";
import { END_POINT, createAPIEndpoint } from "../api/api";
import useStateContext from "../Hooks/useStateContext";

export default function Login() {

    const getfreshModel = () => ({
        UserId: '',
        Password: ''
    })
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getfreshModel);

    const { context, setContext } = useStateContext();
    
    const navigate = useNavigate();
    const login = e => {
        e.preventDefault()
        if (validate()) {
            createAPIEndpoint(END_POINT.loginAPi)
                .login(values)
                .then(res => {
                    setContext({ token: res.data })
                    navigate('/dashboard')
                })
                .catch(err => console.log(err))
        }
    }

    const validate = () => {
        let temp = {}
        temp.UserId = values.UserId != "" ? "" : "this field is required."
        temp.Password = values.Password != "" ? "" : "this field is required."
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
    }
    return (
        <Center>
            <Card sx={{ width: '400' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ my: 3 }}>
                        Login
                    </Typography>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete="on" onSubmit={login}>
                            <TextField
                                label="UserId"
                                name="UserId"
                                value={values.userid}
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.UserId && { error: true, helperText: errors.UserId })}
                            />
                            <TextField
                                label="Password"
                                name="Password"
                                value={values.password}
                                onChange={handleInputChange}
                                variant="outlined"
                                type={"password"}
                                {...(errors.Password && { error: true, helperText: errors.Password })}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ m: 1, width: '90%' }}>SignIn</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    );
}