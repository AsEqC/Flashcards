import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { FormCheckbox } from '@/components/ui/form/form-checkbox'
import { FormInput } from '@/components/ui/form/form-input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(30),
  rememberMe: z.boolean(),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: FormValues) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        control={control}
        error={errors.email?.message}
        label={'email'}
        name={'email'}
        type={'email'}
      />
      <FormInput
        control={control}
        error={errors.password?.message}
        label={'password'}
        name={'password'}
        type={'password'}
      />
      <FormCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
      <Button>Submit</Button>
    </form>
  )
}
