import React from 'react'
/** Tool for logging */
// import DevTools from './DevTools';
/** Importing Provider */
import { Provider } from 'react-redux'
/** Importing routes */
import AppRoutes from '../router';
import CssBaseline from '@material-ui/core/CssBaseline';

const Root = ({ store, history}) => (
    <React.Fragment>
        <CssBaseline />
        <Provider store={store}>
            <div className="main-content">
                <AppRoutes history={history}/>
                {/* <DevTools /> */}
            </div>
        </Provider>
    </React.Fragment>
);

export default Root;