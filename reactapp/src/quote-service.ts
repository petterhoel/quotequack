import {makeClients} from './http/htt-quack';
import {Endpoint} from "./api";

interface jokeResponse {
	joke: string;
}

interface programmerResponse {
	en: string;
	author: string;
}

interface dumpResponse {
	value: string;
}

interface kanyeRespnse {
	quote: string;
}

const mapJokeResponse = (response: jokeResponse): string => response.joke;
const mapProgrammerResponse = (response: programmerResponse): string =>  response.en;
const mapTonaldDumpResponse = (response: dumpResponse): string => response.value;
const mapKanyeResponse = (response: kanyeRespnse): string => response.quote;

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
			return mapProgrammerResponse(response);
		case Endpoint.IDIOT:
			return mapTonaldDumpResponse(response);
		case Endpoint.YEEZY:
			return mapKanyeResponse(response)
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
	{
		url: 'https://tronalddump.io/random/quote',
		name: 'tonalddump',
		type: Endpoint.IDIOT
	},
	{
		url: 'https://api.kanye.rest',
		name: 'kanye',
		type: Endpoint.YEEZY
	}
];

const clients = makeClients(endpoints);

