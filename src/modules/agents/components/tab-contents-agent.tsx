import { AlertTriangle, Dot } from 'lucide-react'
import React from 'react'

type Props = {
  agent?: AgentResponse
  content: 'comics' | 'series' | 'events' | 'stories'
}

export const TabContentsAgent: React.FC<Props> = ({ agent, content }) => {
  if (agent?.[content]?.items.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="flex items-center gap-2 text-xl text-gray-400">
          <AlertTriangle size={32} /> Nenhum dado cadastrado.
        </h1>
      </div>
    )
  }

  return (
    <div className="w-full max-w-5xl pl-10">
      <ul className="flex max-h-full flex-col flex-wrap items-start justify-start">
        {agent?.[content]?.items.map(({ name }) => (
          <li
            key={name}
            className="flex cursor-default items-center font-semibold text-gray-500 transition hover:text-blue-500"
          >
            <Dot size={32} /> {name}
          </li>
        ))}
      </ul>
    </div>
  )
}
