import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import HomeCard from "../../components/HomeCard";
import AdbIcon from '@mui/icons-material/Adb';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Home: React.FC = () => {
    return (
        <Grid container item xs={12} padding={4}>
            <Grid container item xs={12} justifyContent='center'>
                <Typography variant="h3">
                    AREN
                </Typography>
            </Grid>
            <Grid container item xs={12} paddingTop={6} spacing={4}>
                <Grid container item xs={4} paddingTop={6}>
                    <HomeCard 
                    icons={<AdbIcon color="black" sx={{fontSize: 240}} />}
                    >
                    <Typography>Cessão de Uso</Typography>
                    </HomeCard>
                </Grid>
                <Grid container item xs={4} paddingTop={6}>
                    <HomeCard 
                    icons={<AccountBalanceWalletIcon color="black" sx={{fontSize: 240}}/>}
                    >
                    <Typography>Gestão de Contratos</Typography>
                    </HomeCard>
                </Grid>
                <Grid container item xs={4} paddingTop={6}>
                    <HomeCard 
                    icons={''}
                    >
                    <Typography>Desafio Venda</Typography>
                    </HomeCard>
                </Grid>
            </Grid>
            <Grid container item xs={12} paddingTop={6} spacing={4}>
                <Grid container item xs={4} paddingTop={6}>
                    <HomeCard 
                    icons={''}
                    >
                    Desafio Fundo Investimento Imobiliário
                    </HomeCard>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home;