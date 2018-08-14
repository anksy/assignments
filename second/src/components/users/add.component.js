import React, {Component} from "react";
import { Field, reduxForm } from 'redux-form'
import { push } from 'react-router-redux'

/** MUI */
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from "../../ui/mui";
import TextField from '@material-ui/core/TextField';

const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) => (
        <TextField
            fullWidth
            {...input}
            {...custom}
        />
    )

class AddUser extends Component{

    constructor(props){
        super(props);

        /**
         * binding this
         */
        this.submit = this.submit.bind(this);
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
                                        label="Name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="email"
                                        component={renderTextField}
                                        type="email"
                                        placeholder="Email"
                                        label="email"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Field
                                        name="dob"
                                        component={renderTextField}
                                        type="date"
                                        placeholder="Date of Birth"
                                        label="dob"
                                    />
                                </Grid>

                                <Grid item xs={12}>

                                    <Field
                                        name="github"
                                        component={renderTextField}
                                        type="url"
                                        placeholder="Github Profile"
                                        label="github"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Field
                                        name="twitter"
                                        component={renderTextField}
                                        type="url"
                                        placeholder="Twitter Profile"
                                        label="twitter"
                                    />
                                </Grid>


                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="city"
                                        component={renderTextField}
                                        type="text"
                                        placeholder="City"
                                        label="city"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="postal"
                                        component={renderTextField}
                                        type="text"
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
            </div>
        );
    }

    submit(values){
        const {dispatch} = this.props; 
        dispatch({
            type : "addUser",
            data: values,
            success : added => {
                dispatch(push("/users"));
            },
            error : () => {}
        });
    }
}


export default reduxForm({
    form: 'addEditUser' // a unique identifier for this form
})(withStyles(styles)(AddUser))