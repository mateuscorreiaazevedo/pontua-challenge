import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  Button
} from '@/modules/core'
import images from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function RecoverRedirect() {
  const token = cookies().get('pontua.token')

  if (token) {
    redirect('/profile')
  }

  return (
    <div className="flex w-full items-center justify-around">
      <Image src={images.building} alt="building" />
      <Card className="h-[433px] w-[380px] rounded-3xl">
        <CardHeader>
          <CardTitle className="text-4xl text-blue-600">
            Tudo Certo <span className="text-orange-700">;)</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <CardDescription className="text-base font-light text-gray-500">
            Foi enviado um e-mail para você com instruções de como redefinir a sua
            senha.
          </CardDescription>
          <Link href="/login">
            <Button className="h-16 w-full bg-blue-800 text-2xl font-bold hover:bg-blue-600">
              voltar para o login
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
