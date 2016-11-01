import Fetch from 'isomorphic-fetch';
import ES6, { Polyfill } from 'es6-promise';

export default {
	get: (url) => { return fetch(url).then(resposta => resposta.json()); },

	post: (url, dados) => { 
		return fetch(url, { 
			method: 'POST', 
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dados)
		}).then(resposta => resposta.json()); 
	},

	put: (url, dados) => {
		return fetch(url, { 
			method: 'PUT', 
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dados)
		}).then(resposta => resposta.json());
	},

	delete: (url) => { return fetch(url, { method: 'DELETE' }).then(resposta => resposta.json()); }
};