import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';


import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

/**importing dialog & others */
import ConfirmDialog from "../../shared/dialog/confirm.dialog";
import InfoSnackbar from "../../shared/snackbar/info.snackbar";

class Data extends Component{

    constructor(props){
        super(props);

        this.state = {
            open : false,
            snackopen : false,
            snackmessage: null,
            loader : true,
            users : [],
            user_delete : null
        }

        /** binding this */
        this.getData = this.getData.bind(this);
        this.closeDailog = this.closeDailog.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.renderRows = this.renderRows.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
        this.closeSnack = this.closeSnack.bind(this);
    }

    componentDidMount(){
        this.getData(); 
    }

    getData(){
        let { dispatch } = this.props;
        dispatch({
            type: "getUsersData",
            success: users => this.setState({ users: users.data, loader: false }),
            error: err => this.setState({ users: [], loader: false })
        });
    }

    render(){
        const { classes } = this.props;
        const { loading, users, open, snackmessage, snackopen } = this.state;
        
        
        return(
            

            <div className={classNames(classes.layout, classes.cardGrid)}>
                {/* End hero unit */}
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead className="table-head">
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Date of Birth</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>GitHub / Twitter</TableCell>
                                
                                <TableCell>City / Pincode</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users && this.renderRows(users)}
                            {!users.length && 
                                <TableRow>
                                    <TableCell colSpan="8"> We've reached to end of file but coundn't find any user. </TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>

                    <ConfirmDialog open={open} close={this.closeDailog} confirm={this.confirmDelete}/>
                    <InfoSnackbar snackopen={snackopen} message={snackmessage} snackclose={this.closeSnack}/>
                </Paper>
            </div>
        );
    };

    renderRows(rows){
        return rows.map(row => 
            <TableRow key={row.id}>
                <TableCell component="th" scope="row"> {row.name} </TableCell>
                <TableCell>{row.dob}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.github} <div> {row.twitter} </div></TableCell>
                <TableCell>{row.city} <div> {row.postal} </div></TableCell>
                <TableCell className="min-width">
                    {/* <Link to={"/users/add/"+row.id}>
                        <Button size='small' mini color="primary" aria-label="Edit">
                            <Icon>edit_icon</Icon>
                        </Button>
                    </Link>
                    <Button size='small' mini color="primary" aria-label="Edit" onClick={this.deleteRow}>
                        <Icon data-id={row.id}>delete_icon</Icon>
                    </Button> */}

                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Link to={"/users/add/" + row.id}><IconButton color="primary" aria-label="Edit User">
                            <Icon>edit_icon</Icon>
                        </IconButton></Link>

                        <IconButton color="secondary" aria-label="Delete User" onClick={this.deleteRow}>
                            <Icon data-id={row.id}>delete_icon</Icon>
                        </IconButton>

                    </Grid>
                    

                </TableCell>
            </TableRow>
        );
    }

    closeDailog() { this.setState({ open: false }); }    
    closeSnack() { this.setState({ snackopen: false }); }  

    deleteRow($event) { 
        let { id } = $event.target.dataset;
        this.setState({ open: true, user_delete: id });
    }

    confirmDelete() {
        const {dispatch} = this.props;
        if (!this.state.user_delete) return false;
        /** set loader */
        this.setState({ loader: true });
        dispatch({
            type: "deleteUser",
            data : { id : this.state.user_delete },
            success: removed => {

                console.log(removed);
                
                /** refresh list */
                this.getData();
                this.setState({ loader: false, user_delete: null, open: false, snackopen: true, snackmessage: removed.message });
            },
            error: () => this.closeDailog()
        });
    }

}

export default connect()(Data);