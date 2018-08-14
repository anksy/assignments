import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from "../../ui/mui";
/**
 * importing elements
 */
import Data from "./elements/data.element";
import Well from "./elements/well.element";

class Home extends Component {

    render(){
        const { classes } = this.props;
        return (
            <main>
                <Well classes={classes} />
                <Data classes={classes} />
            </main>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);