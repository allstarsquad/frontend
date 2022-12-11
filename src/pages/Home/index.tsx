import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import HomeCard from "../../components/HomeCard";

const Home: React.FC = () => {
    return (
        <Grid container item xs={12} padding={4}>
            <Grid container item xs={12} justifyContent='center'>
                <Typography variant="h3">
                    Bem-vindo ao portal United Hermé
                </Typography>
            </Grid>
            <Grid container item xs={12} paddingTop={6} spacing={4}>
                <Grid container item xs={4} paddingTop={6}>
                    <HomeCard></HomeCard>
                </Grid>
                <Grid container item xs={4} paddingTop={6}>
                    <HomeCard></HomeCard>
                </Grid>
                <Grid container item xs={4} paddingTop={6}>
                    <HomeCard></HomeCard>
                </Grid>
            </Grid>
            <Grid container item xs={12} paddingTop={6} spacing={4}>
                <Grid container item xs={4} paddingTop={6}>
                    <HomeCard></HomeCard>
                </Grid>
                <Grid container item xs={4} paddingTop={6}>
                    <HomeCard></HomeCard>
                </Grid>
                <Grid container item xs={4} paddingTop={6}>
                    <HomeCard></HomeCard>
                </Grid>
            </Grid>
            <Grid container item xs={12} paddingTop={6} spacing={4}>
                <Grid container item xs={4} paddingTop={6}>
                    <HomeCard></HomeCard>
                </Grid>
                <Grid container item xs={4} paddingTop={6}>
                    <HomeCard></HomeCard>
                </Grid>
                <Grid container item xs={4} paddingTop={6}>
                    <HomeCard></HomeCard>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home;