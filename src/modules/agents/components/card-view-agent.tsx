import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from '@/modules/core'
import * as A from '@/modules/core'
import React from 'react'

type Props = {
  agent?: AgentResponse
}

export const CardViewAgent: React.FC<Props> = ({ agent }) => {
  return (
    <Card className="flex h-56 w-full max-w-7xl items-center justify-start px-10">
      <A.Avatar className="h-28 w-28">
        <A.AvatarFallback className="uppercase">
          {agent?.name.slice(0, 1)}
        </A.AvatarFallback>
        <A.AvatarImage
          src={`${agent?.thumbnail.path}.${agent?.thumbnail.extension}`}
          alt={agent?.name}
          className="object-contain"
        />
      </A.Avatar>
      <div>
        <CardHeader>
          <CardTitle className="text-blue-600">{agent?.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{agent?.description}</CardDescription>
        </CardContent>
      </div>
    </Card>
  )
}
