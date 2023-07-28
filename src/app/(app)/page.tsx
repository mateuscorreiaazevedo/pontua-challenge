import { ListAgents, agentService } from '@/modules/agents'
import { toast } from 'react-hot-toast'

export default async function Home() {
  let agents: AgentDataResponse | undefined

  try {
    agents = await agentService.getAllAgents({})
  } catch (error) {
    toast.error((error as any).message)
  }

  return (
    <section className="h-full w-full flex-1">
      <ListAgents data={agents!} />
    </section>
  )
}
