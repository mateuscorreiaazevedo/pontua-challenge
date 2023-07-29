'use client'

import { AtSign, Eye, EyeOff, LogIn } from 'lucide-react'
import { authService } from '../services/auth-service'
import { Button, Input } from '@/modules/core'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import React from 'react'

export const FormLogin = () => {
  const [showPassword, setShowPassword] = React.useState(false)
  const { handleSubmit, register } = useForm<LoginProps>()
  const router = useRouter()

  const handleLogin = async ({ email, password }: LoginProps) => {
    try {
      const response = await authService.login({ email, password })
      toast.success(response)
      router.push('/profile')
    } catch (error) {
      toast.error((error as any).message)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-1 flex-col gap-4">
      <div className="relative">
        <Input
          type="email"
          className="peer/email h-12 w-full font-semibold text-blue-500 placeholder:font-normal placeholder:text-gray-400 focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
          {...register('email')}
          placeholder="Informe seu e-mail"
        />
        <AtSign
          size={17}
          className="absolute right-2 top-1/2 -translate-y-1/2 font-light text-gray-400 transition peer-focus/email:text-blue-500"
        />
      </div>
      <div className="relative">
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          className="peer/password h-12 w-full font-semibold text-blue-500 placeholder:font-normal placeholder:text-gray-400 focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
          {...register('password')}
          placeholder="Informe sua senha"
        />
        <label
          htmlFor="password"
          onClick={() => setShowPassword(state => !state)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 transition peer-focus/password:text-blue-500"
        >
          {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
        </label>
      </div>
      <Button
        type="submit"
        className="flex h-16 w-full items-center justify-center bg-blue-800 text-2xl font-bold hover:bg-blue-600"
      >
        entrar <LogIn />
      </Button>
    </form>
  )
}
