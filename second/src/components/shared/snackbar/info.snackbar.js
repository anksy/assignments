import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    },
});

class SimpleSnackbar extends React.Component {

    render() {
        const { classes, snackopen, snackclose, message } = this.props;
        return (
            <div>
                

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={snackopen}
                    autoHideDuration={3000}
                    onClose={snackclose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{message}</span>}
                />
            </div>
        );
    }
}

SimpleSnackbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSnackbar);