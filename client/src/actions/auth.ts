export const useLogin = (navigator: NavigateFn) => {
	const [loginHandler, { data, loading, error }] = useLoginMutation({
		onCompleted: (data) => {
			if (data?.login?.token) {
				localStorage.setItem('token', data.login.token);
				navigator('/dashboard');
			}
		},
	});
	return { loginHandler, data, loading, error };
};
