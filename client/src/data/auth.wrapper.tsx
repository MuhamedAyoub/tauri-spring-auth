import React, { useContext, useEffect } from 'react'; // Import React
import { AuthContext } from './auth.context';
import { useNavigate } from 'react-router-dom';

const WithAuth = (WrappedComponent: React.FC) => {
	// Accept WrappedComponent as parameter
	const WithAuthWrapper: React.FC = (props) => {
		// Define a functional component
		const navigator = useNavigate();
		const { token } = useContext(AuthContext);
		useEffect(() => {
			if (!token) {
				navigator('/');
			}
		});
		return (
			<WrappedComponent {...props} /> // Render the WrappedComponent if token exists
		);
	};

	return WithAuthWrapper; // Return the wrapper function
};

export default WithAuth;
