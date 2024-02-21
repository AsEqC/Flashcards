import { z } from 'zod'

export type FormValues = z.infer<typeof forgotPasswordSchema>

export const forgotPasswordSchema = z.object({
  email: z.string().email().trim(),
})
