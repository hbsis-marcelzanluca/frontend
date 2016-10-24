import Fetch from 'isomorphic-fetch';
import ES6, { Polyfill } from 'es6-promise';

export default {
	get: (url) => { return fetch(url).then(resposta => resposta.json()); },
	post: (url) => { return fetch(url).then(resposta => resposta.json()); },
	put: (url) => { return fetch(url).then(resposta => resposta.json()); },
	delete: (url) => { return fetch(url).then(resposta => resposta.json()); }
};