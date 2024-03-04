import { Separator } from '@/components/ui/separator';
import { WithAuth } from '@/data/auth.context';

const ProfilePage = () => {
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
					<p className="text-md">Ahmed</p>
				</div>
				<div className="flex items-center gap-4">
					<h4 className="text-lg underline">Email:</h4>
					<p className="text-md">ma.ameri@esi-sba.dz</p>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
