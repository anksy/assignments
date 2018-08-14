import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

/**importing dialog */

import ConfirmDialog from "../../shared/dialog/confirm.dialog";

class Data extends Component{

    constructor(props){
        super(props);

        this.state = {
            open : false,
            loader : true,
            users : [],
            delete : null
        }

        /** binding this */
        this.getData = this.getData.bind(this);
        this.closeDailog = this.closeDailog.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.renderRows = this.renderRows.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        let { dispatch } = this.props;
        dispatch({
            type: "getUsersData",
            success: users => this.setState({ users: users.data, loader: false }),
            error: () => { }
        });
    }

    render(){
        const { classes } = this.props;
        const { loading, users, open } = this.state;

        return(
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
                            {users && this.renderRows(users)}
                            {loading && <h4>Loading...</h4>}
                        </TableBody>
                    </Table>

                    <ConfirmDialog open={open} close={this.closeDailog} confirm={this.confirmDelete}/>
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
                <TableCell>{row.github}</TableCell>
                <TableCell>{row.twitter}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.postal}</TableCell>
                <TableCell>
                    <Link to={"/users/add/"+row.id}>
                        <Button size='small' mini color="primary" aria-label="Edit">
                            <Icon>edit_icon</Icon>
                        </Button>
                    </Link>
                    <Button size='small' mini color="primary" aria-label="Edit" onClick={this.deleteRow}  data-id={row.id}>
                        <Icon data-id={row.id} style={{ pointerEvents: 'none' }}>delete_icon</Icon>
                    </Button>
                </TableCell>
            </TableRow>
        );
    }

    closeDailog() { this.setState({ open: false }); }    
    deleteRow($event) { 
        console.log($event.target);
        console.log($event.target.dataset);
        
        this.setState({ open: true });
    }

    confirmDelete() {
        const {dispatch} = this.props;
        /** set loader */
        this.setState({ loader: true });
        dispatch({
            type: "deleteUser",
            data : { id : 7 },
            success: removed => {
                /** refresh list */
                this.getData();
                /** close popup */
                this.closeDailog();
            },
            error: () => { }
        });
    }

}

export default connect()(Data);