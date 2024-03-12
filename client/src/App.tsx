import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home.page';
import AuthPage from './pages/auth.pages';
import ProfilePage from './pages/profile.page';
import { Navbar } from './components/common/navbar';
import { useContext } from 'react';
import { AuthContext } from './data/auth.context';

function App() {
	const data = useContext(AuthContext);
	console.log(data);
	return (
		<>
			<Navbar />

			<main className="flex  flex-col h-screen  p-6">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/auth" element={<AuthPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="*" element={<div>404</div>} />
				</Routes>
			</main>
		</>
	);
}

export default App;
