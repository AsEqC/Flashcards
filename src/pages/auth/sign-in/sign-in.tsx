import { useForm } from 'react-hook-form'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button } from '@/common/components/ui/button'
import { Card } from '@/common/components/ui/card'
import { FormCheckbox } from '@/common/components/ui/form/form-checkbox'
import { FormInput } from '@/common/components/ui/form/form-input'
import { Typography } from '@/common/components/ui/typography'
import { useLoginMutation } from '@/services/auth/auth.service'
import { ErrorResponse } from '@/services/auth/auth.types'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './sign-in.module.scss'

import { FormValues, signInSchema } from './utils'

export const SignIn = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: { email: '', password: '', rememberMe: false },
    resolver: zodResolver(signInSchema),
  })

  const navigate = useNavigate()

  const [login] = useLoginMutation()

  const onSubmit = async (data: FormValues) => {
    try {
      await toast.promise(login(data).unwrap(), {
        pending: 'In progress',
        success: 'Success',
      })

      navigate('/')
    } catch (e: unknown) {
      const err = e as ErrorResponse

      toast.error(err.data.message ?? 'Could not sign in')
    }
  }

  return (
    <Card classNameWrapper={s.signInWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography className={s.signInLabel} variant={'h1'}>
          Sign In
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
        <FormCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        <NavLink className={s.forgotPassword} to={'/forgot-password'}>
          Forgot Password?
        </NavLink>
        <Button fullWidth>Sign in</Button>
      </form>
      <Typography className={s.formQuestion} variant={'body2'}>
        Don&apos;t have an account?
      </Typography>
      <Link className={s.signUpLink} to={'/sign-up'}>
        Sign Up
      </Link>
    </Card>
  )
}
