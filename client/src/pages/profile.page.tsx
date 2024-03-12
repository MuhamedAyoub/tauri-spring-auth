import { Separator } from '@/components/ui/separator';
import { AuthContext } from '@/data/auth.context';
import WithAuth from '@/data/auth.wrapper';
import { useContext } from 'react';

const ProfilePage = () => {
	const data = useContext(AuthContext);

	return (
		<div className="w-full flex flex-col gap-6">
			<div>
				<h3 className="text-lg font-medium underline">Profile</h3>
				<p className="text-sm text-muted-foreground">
					profile settings and information
				</p>
			</div>
			<Separator />
			<div className="border-2 p-8 top-0 flex flex-col gap-6 border-b-gray-700">
				<div className="flex items-center gap-4">
					<h4 className="text-lg underline">Name:</h4>
					<p className="text-md">{data.user.name}</p>
				</div>
				<div className="flex items-center gap-4">
					<h4 className="text-lg underline">Email:</h4>
					<p className="text-md">{data.user.email}</p>
				</div>
			</div>
		</div>
	);
};

export default WithAuth(ProfilePage);
