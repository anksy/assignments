import React from "react";

/** MUI */
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { Link } from "react-router-dom";

const well = (props) => {

    const {classes} = props;
    
    return(
        <div className={classes.unit}>
            <div className={classes.content}>
                <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                    A React CRUD
                </Typography>
                <Typography variant="title" align="center" color="textSecondary" paragraph>
                    This is a sample app which demonstrate the basic REACT CRUD application. This application provides a way to write data into a text file and perform CRUD operations.
                            </Typography>
                <div className={classes.buttons}>
                    <Grid container spacing={16} justify="center">
                        <Grid item>
                            <Link to="/users/add">
                                <Button variant="contained" color="primary"> Add New User </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default well;