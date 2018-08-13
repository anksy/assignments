import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

/*import component level reducers*/
import site from "./site";


const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    site: site
});

export default rootReducer;