import images from '@/assets/images'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from '@/modules/core'
import { FormRecoverPassword } from '@/modules/auth'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'Recuperar senha - Pontua'
}

export default function RecoverPassword() {
  const token = cookies().get('pontua.token')

  if (token) {
    redirect('/select-agent')
  }

  return (
    <div className="flex w-full items-center justify-around">
      <Image src={images.building} alt="building" />
      <Card className="h-[433px] w-[380px] rounded-3xl">
        <CardHeader>
          <CardTitle className="text-4xl text-blue-600">
            Bem-vindo<span className="text-orange-700">.</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <CardDescription className="text-base font-light text-gray-500">
            Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um
            link com as instruções para você redefinir a sua senha.
          </CardDescription>
          <FormRecoverPassword />
        </CardContent>
      </Card>
    </div>
  )
}
