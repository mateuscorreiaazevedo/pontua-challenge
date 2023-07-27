import { service as s } from '@/modules/core'
import { agentConstants as c } from '..'

type GetAllAgentsProps = {
  offset?: number
  name?: string
  limit?: number
}

class AgentService {
  async getAllAgents({ offset = 0, name, limit = 10 }: GetAllAgentsProps) {
    const response = await s.request<{
      data: AgentDataResponse
      message?: string
    }>({
      url: c.getAllAgents,
      params: {
        ...(offset && { offset }),
        ...(limit && { limit }),
        ...(name && { nameStartsWith: name })
      }
    })

    switch (response.statusCode) {
      case 200:
        return response.body?.data
      case 401:
        throw new Error(response.body?.message)
      case 403:
        throw new Error(response.body?.message)
      case 405:
        throw new Error(response.body?.message)
      case 409:
        throw new Error(response.body?.message)
      default:
        throw new Error('Falha no sistema. Por favor, tente novamente mais tarde')
    }
  }

  async getAgentById(id: number) {
    const response = await s.request<{
      data: AgentDataResponse
      message?: string
    }>({
      url: c.getAgentById.replace('CHARACTER_ID', id.toString())
    })

    switch (response.statusCode) {
      case 200:
        return response.body?.data.results[0]
      case 401:
        throw new Error(response.body?.message)
      case 403:
        throw new Error(response.body?.message)
      case 405:
        throw new Error(response.body?.message)
      case 409:
        throw new Error(response.body?.message)
      default:
        throw new Error('Falha no sistema. Por favor, tente novamente mais tarde')
    }
  }
}

export const agentService = new AgentService()
