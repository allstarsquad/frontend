import { makeStyles } from "@material-ui/core";
import { Paper, Grid, Typography, Button, Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import HomePopUp from "../HomePopUp";

const useStyles = makeStyles({

    card: {
        '&:hover': {
            backgroundColor: "#C0C0C0"
        },
    }
});

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const HomeCard: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
                    <Modal
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                Hey, Doctor!
                            </Typography>
                            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                Fuck you, Doctor!
                            </Typography>
                            <Button onClick={handleClose}>Close Modal</Button>
                        </Box>
                    </Modal>
                <Paper style={{ width: '100%', height: '700px', borderRadius: '14px', borderStyle: 'solid' }} className={classes.card} onClick={handleOpen}>
                    <Grid container item xs={12} padding={4}>
                        <Typography>
                            Card-Teste
                        </Typography>
                    </Grid>
                </Paper>
        </>
    )
}

export default HomeCard;