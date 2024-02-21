import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '@/common/components/ui/button'
import { Card } from '@/common/components/ui/card'
import { FormInput } from '@/common/components/ui/form/form-input'
import { Loader } from '@/common/components/ui/loader'
import { Typography } from '@/common/components/ui/typography'
import { useSignUpMutation } from '@/services/auth/auth.service'
import { ServerError } from '@/services/auth/auth.types'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './sign-up.module.scss'

import { FormValues, signUpSchema } from './utils'

export const SignUp = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<FormValues>({
    defaultValues: { confirmPassword: '', email: '', password: '', sendConfirmationEmail: false },
    resolver: zodResolver(signUpSchema),
  })

  const [signUp, { error, isLoading }] = useSignUpMutation<ServerError>()

  useEffect(() => {
    if (error) {
      setError('email', { message: error.data.errorMessages[0], type: 'custom' })
    }
  }, [error, setError])
  const onSubmit = async (data: FormValues) => {
    const { confirmPassword, ...rest } = data

    await signUp(rest).unwrap()
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Card classNameWrapper={s.signUpWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography className={s.signUpLabel} variant={'h1'}>
          Sign Up
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
        <FormInput
          className={s.passwordField}
          control={control}
          error={errors.password?.message}
          label={'Password'}
          name={'password'}
          placeholder={'Your password'}
          type={'password'}
        />
        <FormInput
          className={s.confirmPassword}
          control={control}
          error={errors.password?.message}
          label={'Confirm Password'}
          name={'confirmPassword'}
          placeholder={'Confirm your password'}
          type={'password'}
        />
        <Button fullWidth>Sign up</Button>
      </form>
      <Typography className={s.formQuestion} variant={'body2'}>
        Already have an account?
      </Typography>
      <Link className={s.signInLink} to={'/sign-in'}>
        Sign In
      </Link>
    </Card>
  )
}
