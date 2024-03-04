import AuthUI from '@/components/auth';

const AuthPage = () => {
	return (
		<div className="flex  h-full justify-center items-center">
			<AuthUI />
		</div>
	);
};
AuthPage.displayName = 'AuthPage';

export default AuthPage;
