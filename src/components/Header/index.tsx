import React from "react";
import { Grid, Toolbar } from '@mui/material'
import Typography from "@mui/material/Typography";
import { AppBar, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
   
   link: {
    '&:hover': {
        color: "#C0C0C0",
      },
      paddingInline: '5px'
   }
  });

const Header: React.FC = () => {

    const classes = useStyles();

    return (
        <AppBar position="static" >
            <Toolbar
                variant="dense"
                sx={{ backgroundColor: '#1C1C1C', boxShadow: 4 }}
            >
                <Grid container item xs={12}>
                    <Link href="/"  style={{ textDecoration: 'none' }}>
                        <Typography  className={classes.link} color='white' fontStyle='oblique'>
                            Home 
                        </Typography>
                    </Link>
                    |
                    <Link href="/dashboard" style={{ textDecoration: 'none' }} >
                        <Typography color='white' className={classes.link}  fontStyle='oblique'> 
                             Dashboard
                        </Typography>
                    </Link>
                    |
                    <Link href="/client_register" style={{ textDecoration: 'none' }}>
                        <Typography color='white' className={classes.link}  fontStyle='oblique'> 
                             Cadastrar pessoa
                        </Typography>
                    </Link>
                    |
                    <Link href="/union_property" style={{ textDecoration: 'none' }}>
                        <Typography color='white' className={classes.link}  fontStyle='italic'> 
                             Cadastrar bens da união
                        </Typography>
                    </Link>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;