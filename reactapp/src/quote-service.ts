import { makeClients} from './http/htt-quack';
import {Endpoint} from "./api";

interface jokeResponse {
	id: string;
	joke: string;
	status: 200
}

interface programmerResponse {
	en: string;
	_id: string;
	author: string;
}


const mapJokeResponse = (response: jokeResponse): string => response.joke;
const mapProgrammerResponse = (response: programmerResponse): string =>  response.en;

/**
 * Asynkron operasjon som returerer et sitat til konsument.
 * Kilden for sitatet er tilfeldig endepunkt og returner et sitat.
 */
const randomApi = () => {
	const numberOfClients = Object.keys(clients).length;
	const randomNumber = Math.ceil(Math.random() * numberOfClients) - 1;
	return clients[randomNumber];
};

const getQuote = async (): Promise<string> => {
	const api = randomApi();
	const response = await api.client.get('');
	return mapResponse(response.data, api.type);
};

export { getQuote };


const mapResponse = (response: any, endpoint: Endpoint): string => {
	switch (endpoint) {
		case Endpoint.JOKE:
			return mapJokeResponse(response);
		case Endpoint.PROGRAMMING:
			return mapProgrammerResponse(response)
	}
};


const endpoints: { url: string, name: string, type: Endpoint }[] = [
	{
		url: 'https://icanhazdadjoke.com',
		name: 'dadjoke',
		type: Endpoint.JOKE
	},
	{
		url: 'https://programming-quotes-api.herokuapp.com/quotes/random',
		name: 'dadjoke',
		type: Endpoint.PROGRAMMING
	},
];

const clients = makeClients(endpoints);

