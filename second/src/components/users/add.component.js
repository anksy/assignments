import React, {Component} from "react";
import { Field, reduxForm } from 'redux-form'
import { push } from 'react-router-redux'

/** MUI */
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from "../../ui/mui";
import TextField from '@material-ui/core/TextField';
import InfoSnackbar from "../shared/snackbar/info.snackbar";
import { required, email, maxLength8, github, twitter } from "../shared/validations/form.validation";

const renderTextField = ({
    input,
    label,
    meta: { touched, error, warning },
    ...custom
}) => (
        <div>
        <TextField
            fullWidth
            {...input}
            {...custom}
        />
        {touched &&
        ((error && <span className="error">{error}</span>) ||
                (warning && <span className="warning">{warning}</span>))}
        </div>
    )

class AddUser extends Component{

    constructor(props){
        super(props);

        this.state = {
            snackopen: false,
            snackmessage: null
        }

        /**
         * binding this
         */
        this.submit = this.submit.bind(this);
        this.closeSnack = this.closeSnack.bind(this);
        
    }

    componentDidMount(){
        let {id} = this.props.match.params;

    
        if (parseInt(id)){  
            /** Get Record */
            this.props.dispatch({
                type : "getUserData",
                data : { id : id },
                success: data => this.props.initialize(data.data)
            });
        }
    }

    render(){

        const { classes, handleSubmit, pristine, reset, submitting } = this.props;
        const { snackmessage, snackopen } =  this.state;

        return(
            <div className={classes.unit}>
                <div className={classes.content}>
                    <div className={classes.buttons}>
                        <form onSubmit={handleSubmit(this.submit)} autoComplete='off'>
                            <Grid container spacing={24} justify="center">

                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="name"
                                        component={renderTextField}
                                        type="text"
                                        placeholder=" Name"
                                        validate={[required]}
                                        label="Name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="email"
                                        component={renderTextField}
                                        type="email"
                                        validate={[required, email]}
                                        placeholder="Email"
                                        label="email"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Field
                                        name="dob"
                                        component={renderTextField}
                                        type="date"
                                        validate={[required]}
                                        placeholder="Date of Birth"
                                        label="dob"
                                    />
                                </Grid>

                                <Grid item xs={12}>

                                    <Field
                                        name="github"
                                        component={renderTextField}
                                        type="url"
                                        validate={[required, github]}
                                        placeholder="Github Profile"
                                        label="github"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Field
                                        name="twitter"
                                        component={renderTextField}
                                        type="url"
                                        validate={[required, twitter]}
                                        placeholder="Twitter Profile"
                                        label="twitter"
                                    />
                                </Grid>


                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="city"
                                        component={renderTextField}
                                        type="text"
                                        validate={[required]}
                                        placeholder="City"
                                        label="city"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="postal"
                                        component={renderTextField}
                                        type="text"
                                        validate={[required, maxLength8]}
                                        placeholder="Postal Code"
                                        label="postal"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" aria-label="save">
                                        Submit
                                    </Button> &nbsp;

                                    <Button type='button' variant="contained" color="secondary" onClick={reset}>
                                        Reset Form
                                    </Button>
                                </Grid>

                            </Grid>
                        </form>
                    </div>
                </div>
                <InfoSnackbar snackopen={snackopen} message={snackmessage} snackclose={this.closeSnack} />
            </div>
        );
    }

    submit(values){
        const { dispatch, reset} = this.props; 
        dispatch({
            type : "addUser",
            data: values,
            success : added => {
                this.setState({ snackopen: true, snackmessage: added.message });
                if (!values.id) reset();
            },
            error : () => {}
        });
    }

    closeSnack() { this.setState({ snackopen: false }); }  
}


export default reduxForm({
    form: 'addEditUser' // a unique identifier for this form
})(withStyles(styles)(AddUser))