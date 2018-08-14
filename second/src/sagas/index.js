import {takeLatest} from 'redux-saga/effects'
import { getData } from './users';

export default function* Sagas(){

	/*User Actions*/
	yield takeLatest("getUsersData", getData);
}