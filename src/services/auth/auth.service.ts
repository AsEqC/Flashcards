import {
  AuthArgsType,
  MeResponse,
  PasswordRecovery,
  SignUpArgsType,
  SignUpResponseType,
} from '@/services/auth/auth.types'

import { baseApi } from '../base-api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<void, AuthArgsType>({
        invalidatesTags: ['Me'],
        query: args => ({
          body: args,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      me: builder.query<MeResponse, void>({
        providesTags: ['Me'],
        query: () => `v1/auth/me`,
      }),
      passwordRecovery: builder.mutation<void, PasswordRecovery>({
        query: args => ({
          body: args,
          method: 'POST',
          url: '/v1/auth/recover-password',
        }),
      }),
      signUp: builder.mutation<SignUpResponseType, SignUpArgsType>({
        invalidatesTags: ['Me'],
        query: args => ({
          body: args ?? undefined,
          method: 'POST',
          url: '/v1/auth/sign-up',
        }),
      }),
    }
  },
})
export const { useLoginMutation, useMeQuery, usePasswordRecoveryMutation, useSignUpMutation } =
  authService
