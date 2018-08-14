import React, { Component } from "react";
import { connect } from "react-redux";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

class Data extends Component{

    constructor(props){
        super(props);

        this.state = {
            loader : true,
            users : []
        }
    }

    componentDidMount(){
        let { dispatch } = this.props;
        dispatch({
            type : "getUsersData",
            success: users => this.setState({ users: users.data, loader : false }),
            error : () => { }
        });
    }

    render(){
        const { classes } = this.props;
        const { loading, users } = this.state;

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
                    <Button size='small' mini color="primary" aria-label="Edit">
                        <Icon>edit_icon</Icon>
                    </Button>
                    <Button size='small' mini color="primary" aria-label="Edit">
                        <Icon>delete_icon</Icon>
                    </Button>
                </TableCell>
            </TableRow>
        );
    }
}

export default connect()(Data);