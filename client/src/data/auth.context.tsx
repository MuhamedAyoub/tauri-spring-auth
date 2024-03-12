import { client } from '@/config/client';
import { Axios } from '@/config/http';
import { TAuthContext } from '@/types';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

const AuthContext = createContext<TAuthContext>({
	token: '',
	user: {
		email: '',
		name: '',
	},
	login: () => ({}),
	logout: () => ({}),
	register: () => ({}),
});

const AuthProvider = ({ children }: PropsWithChildren) => {
	const [authToken, setAuthToken] = useState<string>('');
	const [user, setUser] = useState<{
		email: string;
		name: string;
	}>({
		email: '',
		name: '',
	});

	useEffect(() => {
		const interceptor = Axios.interceptors.request.use((config) => {
			config.headers.Authorization = `Bearer ${authToken}`;
			return config;
		});

		return () => {
			Axios.interceptors.request.eject(interceptor);
		};
	}, [authToken]);
	async function login<T>(values: T) {
		const { accessToken, data, error, loading } = await client.login<T>(values);
		if (error) {
			toast('Error while trying to send the page ', {
				style: {
					backgroundColor: 'red',
					color: 'white',
					fontSize: '1rem',
				},
			});
			return { data, error, loading };
		}

		setAuthToken(accessToken!);
		setUser({
			email: data?.email!,
			name: data?.name!,
		});

		return { data, error, loading };
	}
	async function register<T>(values: T) {
		const { accessToken, data, error, loading } = await client.signup<T>(
			values
		);
		if (error) {
			toast('Error while trying to send the page ', {
				style: {
					backgroundColor: 'red',
					color: 'white',
					fontSize: '1rem',
				},
			});
			return { data, error, loading };
		}

		setAuthToken(accessToken!);
		setUser({
			email: data?.email!,
			name: data?.name!,
		});

		return { data, error, loading };
	}
	const logout = () => {
		setAuthToken('');
	};
	return (
		<AuthContext.Provider
			value={{ token: authToken, login, logout, register, user }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
