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
import { loginSchema } from '../../types/zod';
import { useContext, useState } from 'react';
import { toast } from 'sonner';
import { AuthContext } from '@/data/auth.context';

export type TAuthSchema = z.infer<typeof loginSchema>;
export function SignInAccount() {
	const [loading, setLoading] = useState<boolean>();
	const form = useForm<TAuthSchema>({
		mode: 'onChange',
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});
	const navigator = useNavigate();
	const { login } = useContext(AuthContext);
	async function submitHandler(values: TAuthSchema) {
		setLoading(true);
		const { data, error, loading: isLoading } = await login(values);

		setLoading(isLoading);
		if (data && !error) {
			toast('Welcome back!', {
				style: {
					backgroundColor: 'green',
					color: 'white',
					fontSize: '1rem',
				},
			});
			setTimeout(() => {
				navigator('/profile');
			}, 2000);
		}
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(submitHandler)}>
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl">Sign in to your account</CardTitle>
					<CardDescription>
						Enter your email and password below to login
					</CardDescription>
				</CardHeader>

				<CardContent className="grid gap-4">
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
						Sign in
					</Button>
				</CardFooter>
			</form>
		</Form>
	);
}
