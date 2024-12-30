import axios from "axios"
import {BASE_URL} from "./apis";

export const axiosInstance = axios.create({
    baseURL: BASE_URL
});

export const apiConnector = (method, url, bodyData, headers, params) => {
    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers : null,
        params: params ? params : null,
    });
}