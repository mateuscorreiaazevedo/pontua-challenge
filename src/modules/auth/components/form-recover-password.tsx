'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/main/ui/button'
import { useForm } from 'react-hook-form'
import { Input } from '@/main/ui/input'
import { AtSign } from 'lucide-react'
import toast from 'react-hot-toast'
import React from 'react'

export const FormRecoverPassword = () => {
  const { handleSubmit, register } = useForm()
  const router = useRouter()

  const handleRecoverPassword = async () => {
    try {
      router.push('/recover-password/redirect')
    } catch (error) {
      toast.error((error as any).message)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleRecoverPassword)} className="space-y-4">
      <div className="relative">
        <Input
          {...register('email')}
          placeholder="informe seu e-mail"
          className="peer/email h-16 w-full border-gray-400 font-semibold text-blue-500 outline-none transition placeholder:font-light placeholder:text-gray-400 focus-visible:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <AtSign
          size={20}
          className="absolute right-3 top-1/2 -translate-y-1/2 font-light text-gray-400 transition peer-focus/email:text-blue-500"
        />
      </div>
      <Button className="h-16 w-full bg-blue-200 text-2xl font-bold transition hover:bg-blue-200/80">
        enviar link
      </Button>
    </form>
  )
}
