import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Users from '../components/users/list.component';
import AddUser from '../components/users/add.component';

/** Shared Elements */
import Header from "../components/shared/header/header.component";
import Footer from "../components/shared/footer/footer.component";

class AppRouter extends React.Component {

    render() {
        return (
            <ConnectedRouter history={this.props.history}>      
                <div>
                    <Header />
                        <Switch>
                            <Route exact path="/" component={Users} />
                            <Route exact path="/users/" component={Users} />
                            <Route exact path="/users/add" component={AddUser} />
                        </Switch>
                    <Footer />
                </div>
            </ConnectedRouter>
        );
    }
}

export default AppRouter;