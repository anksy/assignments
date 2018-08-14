import http from '../services/http';
import { users_list, users_delete, users_add, users_details, users_edit } from "../utils/endpoints";

export function getUsersData(data) {
    return new Promise((resolve, reject) => {
        http.Request("get", users_list, null)
        .then(response => resolve(response) )
        .catch(error => reject(error));
    });
}

export function deleteUserData(data) {
    return new Promise((resolve, reject) => {
        http.Request("delete", users_delete + data.data.id, null)
        .then(response => resolve(response) )
        .catch(error => reject(error));
    });
}

export function addUserData(data) {
    return new Promise((resolve, reject) => {
        http.Request(data.data.id ? "put" : "post", data.data.id ? users_edit + data.data.id : users_add, data.data)
        .then(response => resolve(response) )
        .catch(error => reject(error));
    });
}

export function getUserRow(data) {
    return new Promise((resolve, reject) => {
        http.Request("get", users_details + data.data.id, null)
        .then(response => resolve(response) )
        .catch(error => reject(error));
    });
}