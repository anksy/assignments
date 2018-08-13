import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import DevTools from '../containers/DevTools';
import rootReducers from '../reducers';
/*import Sagas*/
import sagas from '../sagas';

const configureStore = (history) => { 
    const sagaMiddleware = createSagaMiddleware();
    let middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware);

    /** Create store from above params */
    const store = createStore(rootReducers, compose(middleware, DevTools.instrument()));
    /*dispatch action first to Saga then reducer*/
    sagaMiddleware.run(sagas);
    /**return store now */
    return store;
}

export default configureStore