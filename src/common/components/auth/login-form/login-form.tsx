import { useForm } from 'react-hook-form'

import { Button } from '@/common/components/ui/button'
import { FormCheckbox } from '@/common/components/ui/form/form-checkbox'
import { FormInput } from '@/common/components/ui/form/form-input'
import { FormRadioGroup } from '@/common/components/ui/form/form-radio-group'
import { RadioItem } from '@/common/components/ui/radio-group/radio-item'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  lol: z.number(),
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
      <FormRadioGroup control={control} name={'lol'}>
        <RadioItem value={'1'}>1</RadioItem>
        <RadioItem value={'2'}>2</RadioItem>
        <RadioItem value={'3'}>3</RadioItem>
        <RadioItem value={'4'}>4</RadioItem>
      </FormRadioGroup>
      <Button>Submit</Button>
    </form>
  )
}
