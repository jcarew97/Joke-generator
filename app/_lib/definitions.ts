'use server'
import { z } from 'zod';

export const SignupFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});