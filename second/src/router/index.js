import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import HomePage from '../components/home/index.js';

class AppRouter extends React.Component {

    render() {

        return (
            <ConnectedRouter history={this.props.history}>      
                <div>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                    </Switch>
                </div>
            </ConnectedRouter>
        );
    }
}

export default AppRouter;