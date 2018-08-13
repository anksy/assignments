import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 800,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});

class home extends Component {

    render(){
        const { classes } = this.props;

        let rows = [
            { id: 1, name: 'Frozen yoghurt', calories : 159, fat : 6.0, carbs : 24, protein : 4.0 },
            { id: 2, name: 'Frozen yoghurt', calories : 159, fat : 6.0, carbs : 24, protein : 4.0 },
            { id: 3, name: 'Frozen yoghurt', calories : 159, fat : 6.0, carbs : 24, protein : 4.0 },
            { id: 4, name: 'Frozen yoghurt', calories : 159, fat : 6.0, carbs : 24, protein : 4.0 },
            { id: 5, name: 'Frozen yoghurt', calories : 159, fat : 6.0, carbs : 24, protein : 4.0 }
        ];

        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap>
                            Sample CRUD App
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    {/* Hero unit */}
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                                A React CRUD
                            </Typography>
                            <Typography variant="title" align="center" color="textSecondary" paragraph>
                                This is a sample app which demonstrate the CRUD application. This application provides a way to write data into a text file. 


                            </Typography>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={16} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            Add New Row
                                        </Button>
                                    </Grid> 
                                </Grid>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(classes.layout, classes.cardGrid)}>
                        {/* End hero unit */}
                        
                        <Paper className={classes.root}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Date of Birth</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Git Hub</TableCell>
                                        <TableCell>Twitter</TableCell>
                                        <TableCell>City</TableCell>
                                        <TableCell>Pincode</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => {
                                        return (
                                            <TableRow key={row.id}>
                                                <TableCell component="th" scope="row"> {row.name} </TableCell>
                                                <TableCell>{row.calories}</TableCell>
                                                <TableCell>{row.fat}</TableCell>
                                                <TableCell>{row.carbs}</TableCell>
                                                <TableCell>{row.protein}</TableCell>
                                                <TableCell>{row.protein}</TableCell>
                                                <TableCell>{row.protein}</TableCell>
                                                <TableCell>
                                                    
                                                    <Button size='small' mini color="primary" aria-label="Edit">
                                                        <Icon>edit_icon</Icon>
                                                    </Button>

                                                    <Button size='small' mini color="primary" aria-label="Edit">
                                                        <Icon>delete_icon</Icon>
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>
                    </div>
                </main>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="title" align="center" gutterBottom>
                        Footer Here...
                    </Typography>
                    <Typography variant="subheading" align="center" color="textSecondary" component="p">
                        A Sample CRUD App!!!
                    </Typography>
                </footer>
                {/* End footer */}
            </React.Fragment>
        );
    }
}

home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(home);