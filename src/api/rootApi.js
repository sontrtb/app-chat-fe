import axios from "axios";
import { API_URL } from "../config";

const _rootPath = API_URL;

const _defaultOptions = {
    headers: {
        // 'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials': true,
        // 'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
        // 'Access-Control-Allow-Headers': '*',
    },
    withCredentials: false,
};

function rootApi( options = {} ) {
    const _fetch = axios.create(_defaultOptions);

    let defaultOptions = {
        withToken: true,
        // displayError: true
    }

    defaultOptions = {
        ...defaultOptions, ...options
    }

    _fetch.interceptors.request.use((config) => {
        if (defaultOptions.withToken) {
            const token = localStorage.getItem('token');
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
    rootApi,
}