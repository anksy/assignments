import { call, put } from 'redux-saga/effects';
import { getUsersData } from "../actions/users";

const _reducer = "_reducer";

export function* getData(action) {
    try {
        const users = yield call(getUsersData, action);

        yield put({ type: action.type + _reducer, params: users });
        action.success(users);
    }
    catch (e) {
        action.error(e);
    }
}