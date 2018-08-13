import session from '../services/session';
const initialState = {
    ...session.get("settings")
}

/**
 * 
 * @param {*} state - state of reducer
 * @param {*} data 
 */
export default function site(state = initialState, action){
    switch (action.type) {
        case "get-settings_reducer":
            return { ...state, ...action.params.data};
        case "set-page_reducer":
            return { ...state, [(action.data.slug).replace(/-/g, "_")] : action.data };
        default:
            return state;
    }
}