import { Separator } from '@/components/ui/separator';

const ProfilePage = () => {
	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Profile</h3>
				<p className="text-sm text-muted-foreground">
					profile settings and information
				</p>
			</div>
			<Separator />
		</div>
	);
};

export default ProfilePage;
