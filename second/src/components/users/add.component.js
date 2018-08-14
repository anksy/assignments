import React, {Component} from "react";
import { Link } from "react-router-dom";
/** MUI */
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from "../../ui/mui";

class AddUser extends Component{
    render(){

        const {classes} = this.props;

        return(
            <div className={classes.unit}>
                <div className={classes.content}>
                    <div className={classes.buttons}>
                        <Grid container spacing={16} justify="center">
                            <Grid item>
                                <Link to="/users"><Button variant="contained" color="primary"> List User </Button></Link>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(AddUser);