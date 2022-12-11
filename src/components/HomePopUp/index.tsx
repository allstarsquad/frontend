import { Dialog, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";


interface IPopUp {
    Open: boolean;
    handleClose: any;
}

const HomePopUp: React.FC<IPopUp> = (props) => {
    const [open, setOpen] = useState(false)

    const handleCancel = () => {
        setOpen(false)
        props.handleClose()
    };

    useEffect(() => {
        if (props.Open) {
            setOpen(true)
        }
    }, [props.Open])

    return (
        <Dialog
            open={open}
            onClose={handleCancel}
        >
            <Grid container item xs={12} style={{
                width: '100%',
                height: '650px'
            }}>
                <Typography>
                    teste
                </Typography>
            </Grid>
        </Dialog>
    )
}

export default HomePopUp;