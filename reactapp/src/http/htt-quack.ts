import axios from 'axios';
import {api} from "../api";

export const makeClients = (apis: api[]) => {
    return apis.map(api => {
        return {
            ...api,
            client: axios.create({
                baseURL: api.url,
                responseType: 'json',
                headers: {
                    'Accept': 'application/json'
                }
            })
        };
    });
};
