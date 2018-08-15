import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


class Header extends Component{
    
    render(){
        const { classes } = this.props;

        return(
            <AppBar position="static">

                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu" className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        CRUDapp
                    </Typography>

                    <Link to='/users' className="whiter"><Button color="inherit">List Users</Button></Link>
                    <Link to='/users/add' className="whiter"><Button color="inherit">Add User</Button></Link>
                </Toolbar>
            </AppBar>
        );
    };
}

export default withStyles(styles)(Header);

