import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/common/components/ui/button'
import { Card } from '@/common/components/ui/card'
import { FormInput } from '@/common/components/ui/form/form-input'
import { Typography } from '@/common/components/ui/typography'
import { htmlContent } from '@/pages/auth/forgot-password/utils/send-email'
import { usePasswordRecoveryMutation } from '@/services/auth/auth.service'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './forgot-password.module.scss'

import { FormValues, forgotPasswordSchema } from './utils'

export const ForgotPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: { email: '' },
    resolver: zodResolver(forgotPasswordSchema),
  })
  const navigate = useNavigate()
  const [passwordRecovery] = usePasswordRecoveryMutation()
  const onSubmit = async (data: FormValues) => {
    passwordRecovery({ email: data.email, html: htmlContent })
    navigate('/check-email', { state: { email: data.email } })
  }

  return (
    <Card classNameWrapper={s.forgotPasswordWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography className={s.signInLabel} variant={'h1'}>
          Forgot your password?
        </Typography>
        <FormInput
          className={s.emailField}
          control={control}
          error={errors.email?.message}
          label={'Email'}
          name={'email'}
          placeholder={'example@gmail.com'}
          type={'email'}
        />
        <Typography as={'p'} className={s.enterEmail} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button fullWidth>Send Instructions</Button>
      </form>
      <Typography className={s.formQuestion} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Link className={s.tryLogLink} to={'/sign-in'}>
        Try logging in
      </Link>
    </Card>
  )
}
