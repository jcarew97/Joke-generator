'use server'

import { SignupFormSchema } from "@/app/_lib/definitions"

export async function signup(prevState, formData) {
  // 1. Validate fields
  const validationResult = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
  if (!validationResult.success) {
    // validationResult.error.flatten()
    // Returns something like:    
    // {
    //   email: 'Invalid email',
    //   password: 'Password must be at least 8 characters long'
    // }
    return { errors: validationResult.error.flatten().fieldErrors }
  }
  // 2. Create user
  const { email, password } = validationResult.data;

  const hashedPassword = await bcrypt.hash(password, 10)

  const data = await db
    .insert(users)
    .values({ email, password: hashedPassword })
    .returning({ id: users.id })

  const user = data[0];

  // 3. Create session

  return { message: "Success", fieldData: { email: formData.get('email') } }
}