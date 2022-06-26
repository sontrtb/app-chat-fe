import axios from "axios";
import { API_URL } from "../config";

const _rootPath = API_URL;

const _defaultOptions = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type,Cache-Control,access_token',
    },
    withCredentials: false,
};

function fetchApi( options = {} ) {
    const _fetch = axios.create(_defaultOptions);

    let defaultOptions = {
        withToken: true,
        displayError: true
    }

    defaultOptions = {
        ...defaultOptions, ...options
    }

    _fetch.interceptors.request.use((config) => {
        if (defaultOptions.withToken) {
            const token = JSON.parse(localStorage.getItem('token'));
            config.headers.Authorization = token ? `Bearer ${token}` : '';
        }
        return config;
    });

    _fetch.interceptors.response.use(undefined, (error) => {
        if(defaultOptions.displayError) {
            console.log(error)
        }

        return Promise.reject(error);
    });

    return _fetch;
}

export {
    _rootPath,
    fetchApi,
}