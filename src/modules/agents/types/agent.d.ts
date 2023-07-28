interface AgentResponse {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
  groups?: {
    name?: string
  }
}
