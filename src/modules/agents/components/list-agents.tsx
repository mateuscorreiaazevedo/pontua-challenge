'use client'

import { Card, Pagination } from '@/modules/core'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { agentService } from '../services/agent-service'

type Props = {
  data: AgentDataResponse
}

export const ListAgents: React.FC<Props> = ({ data }) => {
  const [agents, setAgents] = React.useState<AgentDataResponse>(data)
  const [page, setPage] = React.useState(1)

  const handleChangePage = async (pageNum: number) => {
    try {
      const response = await agentService.getAllAgents({
        offset: pageNum * 10
      })
      setAgents(response!)
      setPage(pageNum)
    } catch (error) {
      toast.error((error as any).message)
    }
  }

  return (
    <article className="flex flex-col items-center justify-center gap-4">
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-4">
        {agents?.results.map((item, index) => {
          const lastRow = index >= agents!.results.length - 2
          return (
            <Link
              key={item.id}
              href={`/profile/${item.id}`}
              className={`${lastRow ? 'col-span-2' : 'col-span-1'}`}
            >
              <Card className="flex h-[150px] items-center justify-start gap-2 bg-gray-100 p-4">
                <Image
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.name}
                  width={200}
                  height={200}
                  loading="lazy"
                  className="h-[120px] w-20 rounded-md object-cover shadow-sm"
                />
                <div className="flex h-full flex-1 flex-col items-start justify-start gap-1">
                  <h3
                    className={`truncate text-base font-bold ${
                      lastRow ? 'max-w-full' : 'max-w-[120px]'
                    }`}
                  >
                    {item.name}
                  </h3>
                  {item.description.length > 0 && (
                    <p className="text-xs font-light">
                      {lastRow
                        ? item.description
                        : item.description.slice(0, 86).concat('...')}
                    </p>
                  )}
                </div>
              </Card>
            </Link>
          )
        })}
      </div>
      <Pagination
        totalItems={agents.total}
        currentPage={page}
        handlePage={handleChangePage}
      />
    </article>
  )
}
