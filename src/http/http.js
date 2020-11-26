import axios from 'axios';
import clientAxios from '../config/axios';

/*const headers = {
    'Content-Type': 'application/json'
}*/

const URL = clientAxios.baseURL;

const get = (action) => {
    return axios.get(URL + action)
        .then((response) => {
            return response;
        }).catch(error => {
            console.log(error);
        });
}

const post = (action, params) => {
    return axios.post(URL + action, params)
        .then(response => {
            return response;
        }).catch(error => {
            console.log(error);
        });
}

const put = (action, params) => {
    return axios.put(URL + action, params)
        .then(response => {
            return response;
        }).catch(error => {
            console.log(error);
        });
}

const _delete = (action, params) => {
    return axios.put(URL + action, params)
        .then(response => {
            return response;
        }).catch(error => {
            console.log(error);
        });
}

const http = {
    get,
    post,
    put,
    delete: _delete
};

export default http;
