import { Button, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import './index.css'

const ClientRegister: React.FC = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            document_number: '',
            telephone: '',
        },
        onSubmit: (response) => {
            console.log(response)
        },
    });

    const handleFieldChange = (event: any) => {
        formik.handleChange(event)
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container item justifyContent='center'>
                <Grid item xs={12} paddingTop={4}>
                    <Typography textAlign='center' variant='h4'> Cadastro de Pessoas</Typography>
                </Grid>
                <Grid item xs={6} paddingY={4} >
                    <Paper>
                        <Grid item xs={12} padding={3}>
                            <Grid container item xs={12} paddingBottom={2}>
                                <Typography variant="h6">
                                    Pessoas
                                </Typography>
                            </Grid>
                            <Grid container item xs={12} spacing={2}>
                                <Grid container item xs={6} paddingTop={2}>
                                    <Typography
                                        variant="subtitle2"
                                        color="textSecondary"
                                        paddingBottom={1}
                                    >
                                        Nome: *
                                    </Typography>
                                    <Grid container item xs={12}>
                                        <TextField
                                            id="name"
                                            variant="outlined"
                                            color="info"
                                            size="small"
                                            name="name"
                                            value={formik.values.name}
                                            onChange={handleFieldChange}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container item xs={6} paddingTop={2}>
                                    <Typography
                                        variant="subtitle2"
                                        color="textSecondary"
                                        paddingBottom={1}
                                    >
                                        CPF: *
                                    </Typography>
                                    <Grid container item xs={12} >
                                        <TextField
                                            id="document_number"
                                            variant="outlined"
                                            color="info"
                                            size="small"
                                            name="document_number"
                                            value={formik.values.document_number}
                                            onChange={handleFieldChange}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item sm={6} paddingTop={2}>
                                    <Typography
                                        variant="subtitle2"
                                        color="textSecondary"
                                        paddingBottom={1}
                                    >
                                        Email: *
                                    </Typography>
                                    <Grid item sm={12} >
                                        <TextField
                                            id="email"
                                            variant="outlined"
                                            color="info"
                                            size="small"
                                            name="email"
                                            value={formik.values.email}
                                            onChange={handleFieldChange}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} paddingTop={2}>
                                    <Typography
                                        variant="subtitle2"
                                        color="textSecondary"
                                        paddingBottom={1}
                                    >
                                        Telefone: *
                                    </Typography>
                                    <Grid item sm={12}>
                                        <TextField
                                            id="telephone"
                                            variant="outlined"
                                            color="info"
                                            size="small"
                                            name="telephone"
                                            value={formik.values.telephone}
                                            onChange={handleFieldChange}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} paddingTop={2} justifyContent='end'>
                                <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </form>
    )
}

export default ClientRegister;