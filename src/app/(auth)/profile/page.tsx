import { agentService, FormSelectAgent } from '@/modules/agents'
import images from '@/assets/images'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from '@/modules/core'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'Selecionar Agente - Pontua'
}

export default async function Profile() {
  let data: AgentDataResponse | undefined

  try {
    data = await agentService.getAllAgents({})
  } catch (error) {
    throw new Error((error as any).message)
  }

  return (
    <div className="flex w-full items-center justify-around">
      <Image src={images.building} alt="building" />
      <Card className="h-[320px] w-[405px] rounded-3xl">
        <CardHeader>
          <CardTitle className="text-4xl text-blue-600">
            Selecione o seu agente mais legal
            <span className="text-orange-700">.</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <CardDescription className="text-base font-light text-gray-500">
            Tenha a visão completa do seu agente.
          </CardDescription>
          <FormSelectAgent data={data!.results} />
        </CardContent>
      </Card>
    </div>
  )
}
