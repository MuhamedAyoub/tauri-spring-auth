import { API_URL } from '@/shared/env';
import axios from 'axios';

const Axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST',
	},
	timeout: 10000,
});

Axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error?.response?.data?.message == 'UNAUTHORIZED') {
			location.reload();
		}
		return error;
	}
);

export { Axios };
