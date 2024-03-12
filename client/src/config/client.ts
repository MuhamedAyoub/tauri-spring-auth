import { Axios } from './http';
import { AxiosRequestConfig } from 'axios';
import { TResponse } from '@/types';

class Client {
	async login<T>(body: T, options?: AxiosRequestConfig) {
		try {
			const response = await Axios.post<T>('/auth/authenticate', body, options);
			const accessToken = response.headers.getAuthorization?.toString();

			return {
				data: response.data as {
					accessToken: string;
					email: string;
					name: string;
					refreshToken: string;
				},
				accessToken,
				error: null,
				loading: false,
			};
		} catch (e) {
			return {
				accessToken: '',
				data: null,
				error: e,
				loading: false,
			};
		}
	}
	async signup<T>(body: T, options?: AxiosRequestConfig) {
		try {
			const response = await Axios.post<T>('register', body, options);
			const accessToken = response.headers.getAuthorization?.toString();
			return {
				data: response.data as {
					accessToken: string;
					email: string;
					name: string;
					refreshToken: string;
				},
				accessToken,
				error: null,
				loading: false,
			};
		} catch (error) {
			return {
				accessToken: '',
				data: null,
				error,
				loading: false,
			};
		}
	}
	async getProfile<T>(options?: AxiosRequestConfig) {
		return (await Axios.get('/profile', options)) as unknown as TResponse<T>;
	}
}

export const client = new Client();
