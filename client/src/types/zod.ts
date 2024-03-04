import { z } from 'zod';
export const loginSchema = z.object({
	email: z.string().email().min(2, 'Email is required'),
	password: z.string().min(4, 'Password is required'),
});

export const createAccountSchema = z.object({
	email: z.string().email().min(2, 'Email is required'),
	password: z.string().min(4, 'Password is required'),
	name: z.string().min(2, 'Name is required'),
});
