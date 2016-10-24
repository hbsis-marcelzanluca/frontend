import Fetch from 'isomorphic-fetch';
import ES6, { Polyfill } from 'es6-promise';

export default {
	get: (url) => { return fetch(url); }
};