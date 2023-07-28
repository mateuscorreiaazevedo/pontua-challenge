import images from '@/assets/images'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/modules/core/card'
import { FormLogin } from '@/modules/auth'
import { ShieldQuestion } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Login - Pontua'
}

export default function Login() {
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
            informe as suas credenciais de acesso ao portal
          </CardDescription>
          <FormLogin />
          <Link
            href="/recover-password"
            className="mt-2 flex items-center justify-center gap-2 self-end text-sm text-orange-700"
          >
            <ShieldQuestion size={18} /> Esqueceu a senha?
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
