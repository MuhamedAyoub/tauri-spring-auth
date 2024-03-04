import { Button } from '@/components/ui/button';
import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Icons } from '../icons/common.icon';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { useNavigate } from 'react-router-dom';
import { createAccountSchema } from '../../types/zod';
import { client } from '@/config/client';
import { useState } from 'react';

export type TAuthSchema = z.infer<typeof createAccountSchema>;
export function CreateAccount() {
	const [loading, setLoading] = useState<boolean>(false);
	const form = useForm<TAuthSchema>({
		mode: 'onChange',
		resolver: zodResolver(createAccountSchema),
		defaultValues: {
			email: '',
			password: '',
			name: '',
		},
	});
	const navigator = useNavigate();
	async function submitHandler(values: TAuthSchema) {
		const {
			data,
			error,
			loading: handledLoading,
		} = await client.signup<TAuthSchema>(values);
		console.log(data);
		console.log(error);
		setLoading(() => handledLoading);
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(submitHandler)}>
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl">Create an account</CardTitle>
					<CardDescription>
						Enter your full name , email and password below to create an account
						!
					</CardDescription>
				</CardHeader>

				<CardContent className="grid gap-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name:</FormLabel>
								<FormControl>
									<Input type="text" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email:</FormLabel>
								<FormControl>
									<Input type="email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password:</FormLabel>
								<FormControl>
									<Input type="password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</CardContent>
				<CardFooter className="flex  justify-center">
					<Button className="w-full" disabled={loading} type="submit">
						{loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
						Create Account
					</Button>
				</CardFooter>
			</form>
		</Form>
	);
}
