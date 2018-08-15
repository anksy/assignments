import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Typography variant="title" align="center" gutterBottom>
                    React App
                    </Typography>
                <Typography variant="subheading" align="center" color="textSecondary" component="p">
                    Designed & Developed By Bhupendra Singh
                    </Typography>
            </footer>
        );
    };
}