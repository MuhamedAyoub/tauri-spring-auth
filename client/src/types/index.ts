export type TAuthContext = {
	token: string;
	login: Function;
	register: Function;
	logout: Function;
	user: {
		email: string;
		name: string;
	};
};

export type TResponse<T> = {
	accessToken: string;
	data: T;
	error: Error | null;
	loading: boolean;
};
