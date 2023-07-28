import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from '@/modules/core/components/ui/card'
import images from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/modules/core/components/ui/button'

export default function RecoverRedirect() {
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
            <Button className="h-16 w-full bg-blue-800 text-2xl font-bold">
              voltar para o login
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
