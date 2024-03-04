import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const Navbar = () => {
	return (
		<nav className="p-6 top-0 left-0 sticky flex w-full items-center justify-end gap-6">
			<Link to="/">
				<Button>Home</Button>
			</Link>
			<Link to="/auth">
				<Button>SignIn</Button>
			</Link>
			{true && (
				<Link to="/profile">
					<Button>Profile</Button>
				</Link>
			)}
		</nav>
	);
};

export { Navbar };
