import { AxiosResponse } from 'axios';

function HttpRequest<T extends new (...args: any[]) => any>(
	constructor: T,
	...args: any[]
) {
	return class extends constructor {
		constructor(...args: any[]) {
			super(...args);
			for (const key of Object.getOwnPropertyNames(constructor.prototype)) {
				const descriptor = Object.getOwnPropertyDescriptor(
					constructor.prototype,
					key
				);
				if (descriptor && typeof descriptor.value === 'function') {
					const originalMethod = descriptor.value as (
						...args: any[]
					) => Promise<AxiosResponse<any, any>>;
					descriptor.value = async function (...args: any[]) {
						try {
							const response = await originalMethod.apply(this, args);
							const accessToken = response.headers.getAuthorization;
							return {
								data: response.data,
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
					};
					Object.defineProperty(this, key, descriptor);
				}
			}
		}
	};
}

export { HttpRequest };
