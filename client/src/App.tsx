import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home.page';
import AuthPage from './pages/auth.pages';
import ProfilePage from './pages/profile.page';

function App() {
	return (
		<main className="flex justify-center items-center p-6">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/auth" element={<AuthPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="*" element={<div>404</div>} />
			</Routes>
		</main>
	);
}

export default App;
