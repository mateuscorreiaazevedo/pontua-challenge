'use client'

import { AtSign, Eye, EyeOff, LogIn } from 'lucide-react'
import { Button } from '@/main/ui/button'
import { useForm } from 'react-hook-form'
import React from 'react'
import { Input } from '@/main/ui/input'

export const FormLogin = () => {
  const { handleSubmit, register } = useForm()
  const [showPassword, setShowPassword] = React.useState(false)

  const handleLogin = async () => {
    console.log('')
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-1 flex-col gap-4">
      <div className="relative">
        <Input
          className="h-12 w-full font-semibold text-blue-500 placeholder:font-normal placeholder:text-gray-400 focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
          {...register('email')}
          placeholder="Informe seu e-mail"
        />
        <AtSign
          size={17}
          className="absolute right-2 top-1/2 -translate-y-1/2 font-light text-blue-500"
        />
      </div>
      <div className="relative">
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          className="h-12 w-full font-semibold text-blue-500 placeholder:font-normal placeholder:text-gray-400 focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
          {...register('email')}
          placeholder="Informe sua senha"
        />
        <label
          htmlFor="password"
          onClick={() => setShowPassword(state => !state)}
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          {showPassword ? (
            <EyeOff className="text-blue-500" size={17} />
          ) : (
            <Eye className="text-gray-400" size={17} />
          )}
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
