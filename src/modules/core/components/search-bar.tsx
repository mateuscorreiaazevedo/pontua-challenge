'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/modules/core'
import { useDebounce } from '../hooks/use-debounce'
import { agentService } from '@/modules/agents'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import * as C from '@reach/combobox'
import toast from 'react-hot-toast'
import React from 'react'

const SearchBar = () => {
  const [search, setSearch] = React.useState('')
  const { debouncedValue } = useDebounce<string>(search)
  const [searchAgents, setAgents] = React.useState<AgentResponse[]>([])
  const router = useRouter()

  React.useEffect(() => {
    ;(async () => {
      try {
        const response = await agentService.getAllAgents({ name: debouncedValue })
        setAgents(response!.results)
      } catch (error) {
        toast.error((error as any).message)
      }
    })()
  }, [debouncedValue])

  async function handleSelectAgent(value: string) {
    const response = await agentService.getAllAgents({ name: value })
    const agentId = response?.results[0].id
    router.push(`/profile/${agentId}`)
    setSearch('')
  }

  return (
    <C.Combobox className="w-full" onSelect={handleSelectAgent}>
      <div className="flex h-[60px] w-full items-center gap-2">
        <Search size={20} className="mb-0.5 text-blue-200" />
        <C.ComboboxInput
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full font-semibold text-blue-500 outline-none placeholder:font-normal placeholder:text-blue-200"
          placeholder="Busque um agente"
        />
      </div>
      <C.ComboboxPopover className="mt-2 w-full">
        <C.ComboboxList className="w-full rounded-md bg-zinc-50 px-6 py-4">
          {searchAgents.map(item => (
            <C.ComboboxOption
              key={item.id}
              value={item.name}
              className="my-1 flex cursor-pointer items-center justify-start gap-2 rounded px-2 py-1 hover:bg-zinc-100"
            >
              <Avatar>
                <AvatarFallback className="uppercase">
                  {item.name.slice(0, 1)}
                </AvatarFallback>
                <AvatarImage
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.name}
                />
              </Avatar>
              <C.ComboboxOptionText />
            </C.ComboboxOption>
          ))}
        </C.ComboboxList>
      </C.ComboboxPopover>
    </C.Combobox>
  )
}

export default SearchBar
