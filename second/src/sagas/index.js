import {takeLatest} from 'redux-saga/effects'
import { getSettings } from './site';

export default function* Sagas(){

	/*Admin User Actions*/
	yield takeLatest("get-settings", getSettings);
}