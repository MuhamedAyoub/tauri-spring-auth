import { useState } from 'react';
import { SignInAccount } from './login';
import { Card, CardFooter } from '../ui/card';
import { Label } from '../ui/label';
import { CreateAccount } from './signup';

type AuthOption = 'LOGIN' | 'CREATE_ACCOUNT';
export default function AuthUI() {
	const [selectedAuth, setSelectedAuth] = useState<AuthOption>('LOGIN');

	return (
		<Card className="min-w-[380px] max-w-[470px]">
			{selectedAuth === 'LOGIN' ? <SignInAccount /> : <CreateAccount />}
			<CardFooter className="flex flex-col gap-6">
				<Label
					className="opacity-70 text-xs  underline w-fit self-end cursor-pointer"
					onClick={() =>
						setSelectedAuth((prev) =>
							prev === 'LOGIN' ? 'CREATE_ACCOUNT' : 'LOGIN'
						)
					}>
					{selectedAuth === 'LOGIN'
						? 'Create a new account'
						: 'Already have an account'}
				</Label>
			</CardFooter>
		</Card>
	);
}
