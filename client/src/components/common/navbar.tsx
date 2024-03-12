import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { useContext } from 'react';
import { AuthContext } from '@/data/auth.context';

const Navbar = () => {
	const { token, logout } = useContext(AuthContext);
	return (
		<nav className="p-6 top-0 left-0 sticky flex w-full items-center justify-end gap-6">
			<Link to="/">
				<Button>Home</Button>
			</Link>
			{!token ? (
				<Link to="/auth">
					<Button>SignIn</Button>
				</Link>
			) : (
				<Button onClick={() => logout()}>Logout</Button>
			)}
			{true && (
				<Link to="/profile">
					<Button>Profile</Button>
				</Link>
			)}
		</nav>
	);
};

export { Navbar };
