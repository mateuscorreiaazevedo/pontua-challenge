import { lazy } from 'react'

export { default as agentConstants } from './constants/agents'
export * from './constants/tabs-list-profile-agent'
export * from './components/tab-contents-agent'
export * from './components/card-view-agent'
export * from './components/list-agents'
export * from './services/agent-service'

export const FormSelectAgent = lazy(() => import('./components/form-select-agent'))
