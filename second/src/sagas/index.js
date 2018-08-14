import {takeLatest} from 'redux-saga/effects'
import { getData, deleteUser, addUser, getUserData } from './users';

export default function* Sagas(){
	/*User Actions*/
	yield takeLatest("getUsersData", getData);
	yield takeLatest("deleteUser", deleteUser);
	yield takeLatest("addUser", addUser);
	yield takeLatest("getUserData", getUserData);
}