// de decorator

import { HttpRequest } from '@/decorators/request';
import { Axios } from './http';
import { AxiosRequestConfig } from 'axios';
import { TResponse } from '@/types';

@HttpRequest
class Client {
	async login<T>(body: T, options?: AxiosRequestConfig) {
		return (await Axios.post<T>(
			'login',
			body,
			options
		)) as unknown as TResponse<T>;
	}
	async signup<T>(body: T, options?: AxiosRequestConfig) {
		return (await Axios.post<T>(
			'register',
			body,
			options
		)) as unknown as TResponse<T>;
	}
	async getProfile<T>(options?: AxiosRequestConfig) {
		return (await Axios.get('/profile', options)) as unknown as TResponse<T>;
	}
}

export const client = new Client();
