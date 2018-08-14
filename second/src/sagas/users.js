import { call, put } from 'redux-saga/effects';
import { getUsersData, deleteUserData, addUserData, getUserRow } from "../actions/users";

const _reducer = "_reducer";

export function* getData(action) {
    try {
        const users = yield call(getUsersData, action);
        /**
         * for manipulating Store
         */
        yield put({ type: action.type + _reducer, params: users });
        action.success(users);
    }
    catch (e) {
        action.error(e);
    }
}

export function* deleteUser(action) {
    try {
        const remove = yield call(deleteUserData, action);
        action.success(remove);
    }
    catch (e) {
        action.error(e);
    }
}

export function* addUser(action) {
    try {
        const add = yield call(addUserData, action);
        action.success(add);
    }
    catch (e) {
        action.error(e);
    }
}

export function* getUserData(action) {
    try {
        const details = yield call(getUserRow, action);
        action.success(details);
    }
    catch (e) {
        action.error(e);
    }
}