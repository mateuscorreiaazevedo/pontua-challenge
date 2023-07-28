import { CardViewAgent, agentService } from '@/modules/agents'
import toast from 'react-hot-toast'
import * as T from '@/modules/core'
import Link from 'next/link'
import React from 'react'

type Props = {
  params: {
    id: number
  }
}

const tabList = [
  {
    value: 'viewAgent',
    label: 'Visão Geral'
  },
  {
    value: 'teams',
    label: 'Teams'
  },
  {
    value: 'powers',
    label: 'Powers'
  },
  {
    value: 'species',
    label: 'Species'
  },
  {
    value: 'authors',
    label: 'Authors'
  }
]

export async function generateMetadata({ params }: Props) {
  const { id } = params
  const agent = await agentService.getAgentById(id)

  return {
    title: `Agente ${agent?.name} - Pontua`
  }
}

export default async function Agent({ params }: Props) {
  const { id } = params
  let agent: AgentResponse | undefined
  try {
    agent = await agentService.getAgentById(id)
  } catch (error) {
    toast.error((error as any).message)
  }

  return (
    <section>
      <h1 className="text-2xl text-blue-600">
        <Link href="/select-agent" className="font-bold">
          Perfil
        </Link>
        <span className="mx-1 font-bold text-orange-500">/</span>
        {agent?.name}
      </h1>
      <T.Tabs defaultValue="viewAgent" className="w-full">
        <T.TabsList className="flex w-full items-center justify-start rounded-none border-b border-divider bg-white pb-0">
          {tabList.map(({ label, value }) => (
            <T.TabsTrigger key={value} value={value}>
              {label}
            </T.TabsTrigger>
          ))}
        </T.TabsList>
        <T.TabsContent value="viewAgent">
          <CardViewAgent agent={agent} />
        </T.TabsContent>
        <T.TabsContent value="teams"></T.TabsContent>
        <T.TabsContent value="powers"></T.TabsContent>
        <T.TabsContent value="species"></T.TabsContent>
        <T.TabsContent value="authors"></T.TabsContent>
      </T.Tabs>
    </section>
  )
}
