import { Toaster } from 'sonner';
import { AuthProvider } from './data/auth.context';
import { BrowserRouter } from 'react-router-dom';
import { PropsWithChildren } from 'react';

const Providers = ({ children }: PropsWithChildren) => {
	return (
		<>
			{/* <AuthProvider> */}
			<BrowserRouter basename="/">{children}</BrowserRouter>
			{/* </AuthProvider> */}
			<Toaster />
		</>
	);
};

Providers.displayName = 'Components Providers';

export default Providers;
