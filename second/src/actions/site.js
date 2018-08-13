import http from '../services/http';
import { getSettings } from "../utils/endpoints";

export function getSettingsCall(data) {
    return new Promise((resolve, reject) => {
        http.Request("get", getSettings, data.data)
        .then(response => resolve(response) )
        .catch(error => reject(error) );
    });
}