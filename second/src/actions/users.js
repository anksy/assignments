import http from '../services/http';
import { usersData } from "../utils/endpoints";

export function getUsersData(data) {
    return new Promise((resolve, reject) => {
        http.Request("get", usersData, data.data)
        .then(response => resolve(response) )
        .catch(error => reject(error) );
    });
}