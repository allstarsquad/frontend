import React, { Component, useState } from 'react';
import { ethers } from "ethers";
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Metamask: React.FC = () => {
    const [selectedAddress, setSelectedAddress] = useState('')

    const history = useNavigate();

     const connectToMetamask = async() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await provider.send("eth_requestAccounts", []);
        setSelectedAddress(accounts[0])
        history('/home')
    }

    const renderMetamask = () => {
        if (!selectedAddress) {
            return (
                <Grid container item xs={12} padding={4} justifyContent='center'>
                    <Button
                        onClick={() => connectToMetamask()}
                        variant='contained'
                        color='primary'
                    >
                        Logar ao Metamask
                    </Button>
                </Grid>
            )
        } else {
            return (
                <p>Welcome {selectedAddress}</p>
            );
        }
    }
        return (
            <div>
                {renderMetamask()}
            </div>
        )
}

export default Metamask;