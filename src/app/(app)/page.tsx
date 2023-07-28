import { agentService } from '@/modules/agents'
import { toast } from 'react-hot-toast'
import { Card } from '@/modules/core'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  let agents: AgentDataResponse | undefined

  try {
    agents = await agentService.getAllAgents({})
  } catch (error) {
    toast.error((error as any).message)
  }

  return (
    <section className="h-full w-full flex-1">
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
    </section>
  )
}
