import images from '@/assets/images'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/main/ui/card'
import { FormLogin } from '@/modules/auth'
import Image from 'next/image'
import React from 'react'

export default function Login() {
  return (
    <div className="flex w-full items-center justify-around">
      <Image src={images.building} alt="building" />
      <Card className="w-[380px] rounded-3xl">
        <CardHeader>
          <CardTitle className="text-4xl text-blue-600">Bem-vindo.</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <CardDescription className="text-base text-gray-500">
            informe as suas credenciais de acesso ao portal
          </CardDescription>
          <FormLogin />
        </CardContent>
      </Card>
    </div>
  )
}
