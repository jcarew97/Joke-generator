'use server'

import { SignupFormSchema } from "@/app/_lib/definitions"

export async function signup(state, formData) {
  // 1. Validate fields
  const validationResult = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });
  // 2. Create user
  // 3. Create session
}