import React from 'react'
/** Importing Provider */
import { Provider } from 'react-redux'
/** Importing routes */
import AppRoutes from '../router';
import CssBaseline from '@material-ui/core/CssBaseline';

const Root = ({ store, history }) => (
    <React.Fragment>
        <CssBaseline />
        <Provider store={store}>
            <div>
                <AppRoutes history={history} />
            </div>
        </Provider>
    </React.Fragment>
);

export default Root;