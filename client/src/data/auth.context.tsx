import { client } from '@/config/client';
import { Axios } from '@/config/http';
import { TAuthContext } from '@/types';
import {
	PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';

const AuthContext = createContext<TAuthContext>({
	token: '',
	login: () => ({}),
	logout: () => ({}),
	register: () => ({}),
});

const AuthProvider = ({ children }: PropsWithChildren) => {
	const [authToken, setAuthToken] = useState<string>('');
	const isAuthenticated = () => {
		return !!authToken;
	};
	const s = useContext(AuthContext);
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

		setAuthToken(accessToken);
		return { data, error, loading };
	}
	async function register<T>(values: T) {
		const { accessToken, data, error, loading } = await client.signup<T>(
			values
		);

		setAuthToken(accessToken);
		return { data, error, loading };
	}
	const logout = () => {
		setAuthToken('');
	};
	return (
		<AuthContext.Provider value={{ token: authToken, login, logout, register }}>
			{children}
		</AuthContext.Provider>
	);
};