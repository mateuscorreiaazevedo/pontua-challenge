import {
  CardViewAgent,
  TabContentsAgent,
  agentService,
  tabList
} from '@/modules/agents'
import toast from 'react-hot-toast'
import * as T from '@/modules/core'
import Link from 'next/link'
import React from 'react'

type Props = {
  params: {
    id: number
  }
}

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
        <T.TabsContent value="comics">
          <TabContentsAgent content="comics" agent={agent} />
        </T.TabsContent>
        <T.TabsContent value="series">
          <TabContentsAgent content="series" agent={agent} />
        </T.TabsContent>
        <T.TabsContent value="events">
          <TabContentsAgent agent={agent} content="events" />
        </T.TabsContent>
        <T.TabsContent value="stories">
          <TabContentsAgent agent={agent} content="stories" />
        </T.TabsContent>
      </T.Tabs>
    </section>
  )
}
