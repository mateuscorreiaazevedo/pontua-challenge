import { agentService } from '@/modules/agents'
import React from 'react'
import toast from 'react-hot-toast'

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

  return <div>{agent?.name}</div>
}
