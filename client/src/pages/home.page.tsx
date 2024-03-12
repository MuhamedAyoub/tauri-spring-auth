import InfoSection from '@/components/common/info';
import { common } from '@/contents/common';
import { SlashSquare } from 'lucide-react';

const HomePage = () => {
	// const { token } = useContext(AuthContext);
	return (
		<div className="flex justify-center items-center p-6 flex-col gap-8">
			<InfoSection
				title={common.info.title}
				subtitle={common.info.subtitle}
				desc={<Desc />}>
				<SlashSquare className="w-10 h-10" />
			</InfoSection>
		</div>
	);
};
HomePage.displayName = 'HomePage';

export default HomePage;

const Desc = () => {
	return (
		<>
			<h3 className="text-xl underline"> What this Project For </h3>
			<p>
				This is an Academic Project about auth task with profile page for ASCI
				module
				<br />
				What the project contain
			</p>
			<ul style={{ listStyle: 'inside' }}>
				<li>Hashing Password</li>
				<li>Auth System based on JWT</li>
				<li>Spring Security </li>
				<li>Handling Authorization with Spring Security </li>
				<li>Input Validation from Frontend</li>
				<li>Api Validation from Backend</li>
				<li>Sign In , Sign Up pages</li>
				<li>Profile Page</li>
			</ul>
			<h4 className="text-lg underline">The Tech Stack ?:</h4>
			<ul style={{ listStyle: 'inside' }}>
				<li>Rust 🔥 & Typescript </li>
				<li>Tauri 🔥 & React 💪</li>
				<li>Java & Spring Boot ♨️</li>
				<li> Spring Security v6</li>
				<li>Shad cn & Tailwind css 🗽</li>
			</ul>
		</>
	);
};
