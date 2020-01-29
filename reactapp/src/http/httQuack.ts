import axios from 'axios';

const dadJokeClient = axios.create({
    baseURL: 'https://icanhazdadjoke.com',
    responseType: 'json',
    headers: {
        'Accept': 'application/json'
    }
});


export const clients = {
    jokes: dadJokeClient
};
