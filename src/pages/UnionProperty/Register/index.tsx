import { Button, Grid, MenuItem, Paper, Select, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';

interface IClient {
    name: string;
    email: string;
    cpf: string;
    telephone: string
}

/* Comum: name, id,  tipo, cep, topografia, memorial_descritivo
Dominical: name, id, cep, numero, topografia, memorial_descritivo, dono
Especial: name, id, tipo, cep, numero, topografia, memorial_descritivo, dono */

const UnionProperty: React.FC = () => {
    const [isTypeSelected, setIsTypeSelected] = useState(true)
    const [type, setType] = useState('')

    const formik = useFormik({
        initialValues: {
            name: '',
            type: '',
            cep: '',
            number: '',
            topography: '',
            memorial: '',
            owner: ''
        },
        onSubmit: (response) => {
            console.log(response)
        },
    });

    const handleFieldChange = (event: any) => {
        formik.handleChange(event)
    }

    const SelectType = () => {
        return (
            <Grid container item xs={12} justifyContent='center' paddingTop={4}>
                <Typography variant="h3">Selecione o tipo</Typography>
                <Grid container item xs={12} justifyContent='center'>
                    <Select label={type} value={type} onChange={() => setIsTypeSelected(false)}>
                        <MenuItem value={10} onClick={() => setType('comum')}>Comum</MenuItem>
                        <MenuItem value={20} onClick={() => setType('dominical')}>Dominical</MenuItem>
                        <MenuItem value={30} onClick={() => setType('especial')}>Especial</MenuItem>
                    </Select>
                </Grid>
            </Grid>
        )
    }

    return (
        <form onSubmit={formik.handleSubmit}>
           { type ? <Grid item xs={12} paddingTop={4}>
                <Typography textAlign='center' variant='h4'> Cadastro de bens da união ({type})</Typography>
                <Grid container item xs={12} justifyContent='center'>
                    <Select label="Teste" title="teste"  value='teste' onChange={() => setIsTypeSelected(false)}>
                        <MenuItem value={10} onClick={() => setType('comum')}>Comum</MenuItem>
                        <MenuItem value={20} onClick={() => setType('dominical')}>Dominical</MenuItem>
                        <MenuItem value={30} onClick={() => setType('especial')}>Especial</MenuItem>
                    </Select>
                </Grid>
            </Grid> : <></> }
            {isTypeSelected ? <SelectType /> : type === 'comum' ?
                <Grid container item justifyContent='center'>
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
                                            Tipo: *
                                        </Typography>
                                        <Grid container item xs={12} >
                                            <TextField
                                                id="type"
                                                variant="outlined"
                                                color="info"
                                                size="small"
                                                name="type"
                                                value={formik.values.type}
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
                                            CEP: *
                                        </Typography>
                                        <Grid item sm={12} >
                                            <TextField
                                                id="cep"
                                                variant="outlined"
                                                color="info"
                                                size="small"
                                                name="cep"
                                                value={formik.values.cep}
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
                                            Topografia: *
                                        </Typography>
                                        <Grid item sm={12}>
                                            <TextField
                                                id="topography"
                                                variant="outlined"
                                                color="info"
                                                size="small"
                                                name="topography"
                                                value={formik.values.topography}
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
                                            Memorial descritivo: *
                                        </Typography>
                                        <Grid item sm={12}>
                                            <TextField
                                                id="memorial"
                                                variant="outlined"
                                                color="info"
                                                size="small"
                                                name="memorial"
                                                value={formik.values.memorial}
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
                : type === 'dominical' ?
                    <Grid container item justifyContent='center'>
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
                                        <Grid item sm={6} paddingTop={2}>
                                            <Typography
                                                variant="subtitle2"
                                                color="textSecondary"
                                                paddingBottom={1}
                                            >
                                                CEP: *
                                            </Typography>
                                            <Grid item sm={12} >
                                                <TextField
                                                    id="cep"
                                                    variant="outlined"
                                                    color="info"
                                                    size="small"
                                                    name="cep"
                                                    value={formik.values.cep}
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
                                                Número: *
                                            </Typography>
                                            <Grid item sm={12} >
                                                <TextField
                                                    id="number"
                                                    variant="outlined"
                                                    color="info"
                                                    size="small"
                                                    name="number"
                                                    value={formik.values.number}
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
                                                Topografia: *
                                            </Typography>
                                            <Grid item sm={12}>
                                                <TextField
                                                    id="topography"
                                                    variant="outlined"
                                                    color="info"
                                                    size="small"
                                                    name="topography"
                                                    value={formik.values.topography}
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
                                                Memorial descritivo: *
                                            </Typography>
                                            <Grid item sm={12}>
                                                <TextField
                                                    id="memorial"
                                                    variant="outlined"
                                                    color="info"
                                                    size="small"
                                                    name="memorial"
                                                    value={formik.values.memorial}
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
                                                Dono: *
                                            </Typography>
                                            <Grid item sm={12}>
                                                <TextField
                                                    id="owner"
                                                    variant="outlined"
                                                    color="info"
                                                    size="small"
                                                    name="owner"
                                                    value={formik.values.owner}
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
                    </Grid> : type === 'especial' ?
                        <Grid container item justifyContent='center'>
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
                                                    Tipo: *
                                                </Typography>
                                                <Grid container item xs={12} >
                                                    <TextField
                                                        id="type"
                                                        variant="outlined"
                                                        color="info"
                                                        size="small"
                                                        name="type"
                                                        value={formik.values.type}
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
                                                    CEP: *
                                                </Typography>
                                                <Grid item sm={12} >
                                                    <TextField
                                                        id="cep"
                                                        variant="outlined"
                                                        color="info"
                                                        size="small"
                                                        name="cep"
                                                        value={formik.values.cep}
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
                                                    Número: *
                                                </Typography>
                                                <Grid item sm={12} >
                                                    <TextField
                                                        id="number"
                                                        variant="outlined"
                                                        color="info"
                                                        size="small"
                                                        name="number"
                                                        value={formik.values.number}
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
                                                    Topografia: *
                                                </Typography>
                                                <Grid item sm={12}>
                                                    <TextField
                                                        id="topography"
                                                        variant="outlined"
                                                        color="info"
                                                        size="small"
                                                        name="topography"
                                                        value={formik.values.topography}
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
                                                    Memorial descritivo: *
                                                </Typography>
                                                <Grid item sm={12}>
                                                    <TextField
                                                        id="memorial"
                                                        variant="outlined"
                                                        color="info"
                                                        size="small"
                                                        name="memorial"
                                                        value={formik.values.memorial}
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
                                                    Dono: *
                                                </Typography>
                                                <Grid item sm={12}>
                                                    <TextField
                                                        id="owner"
                                                        variant="outlined"
                                                        color="info"
                                                        size="small"
                                                        name="owner"
                                                        value={formik.values.owner}
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
                        </Grid> : <></>

            }
        </form>
    )
}

export default UnionProperty;