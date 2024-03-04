import { Separator } from '@/components/ui/separator';
import { PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren & {
	title: string;
	subtitle: string;
	desc: ReactNode;
};
export default function InfoSection({
	desc,
	subtitle,
	title,
	children,
}: Props) {
	const Comp = typeof desc !== 'string' ? 'div' : 'p';
	return (
		<div className="flex p-6 flex-col gap-4">
			<div className="flex gap-3 items-center ">
				{children}
				<h2>{title}</h2>
			</div>
			<Separator />
			<div className="p-4 w-full flex flex-col gap-2 border border-gray-600">
				<h4>{subtitle}</h4>
				<Separator className="border-gray-800" />
				<Comp className="text-sm flex flex-col gap-6">{desc}</Comp>
			</div>
		</div>
	);
}
