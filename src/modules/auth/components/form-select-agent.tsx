'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/main/ui/avatar'
import { Button } from '@/main/ui/button'
import {
  Select,
  SelectTrigger,
  SelectGroup,
  SelectItem,
  SelectContent,
  SelectValue,
  SelectLabel
} from '@/main/ui/select'
import { agentService } from '@/modules/agents'
import { User } from 'lucide-react'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useInView } from 'react-intersection-observer'

type Props = {
  data: AgentResponse[]
}

type FormProps = {
  agent: string
}

export const FormSelectAgent: React.FC<Props> = ({ data }) => {
  const [agents, setAgents] = React.useState<AgentResponse[]>(data)
  const [loading, setLoading] = React.useState(false)
  const { ref, inView } = useInView({ threshold: 0 })
  const [offset, setOffset] = React.useState(20)
  const { handleSubmit, setValue, watch } = useForm<FormProps>({
    defaultValues: { agent: '' }
  })

  const agent = watch('agent')

  async function setInfiniteScrolling() {
    setLoading(true)
    try {
      const response = await agentService.getAllAgents({ offset })
      setAgents([...agents, ...response!.results])
      setOffset(offset + 20)
    } catch (error) {
      toast.error((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  const handleSelectAgent: SubmitHandler<FormProps> = async data => {
    toast(data.agent)
  }

  React.useEffect(() => {
    if (inView) {
      setInfiniteScrolling()
    }
  }, [inView])

  return (
    <form onSubmit={handleSubmit(handleSelectAgent)} className="flex flex-col gap-4">
      <Select onValueChange={value => setValue('agent', value)}>
        <SelectTrigger className="w=[320px] relative h-11 focus-visible:border-blue-600 focus-visible:outline-4 focus-visible:outline-offset-0 focus-visible:outline-blue-200/10 focus-visible:ring-0 focus-visible:ring-offset-0">
          <SelectValue
            placeholder={
              <div className="flex items-center justify-start gap-4 text-gray-400">
                <User size={20} /> Selecione um agente
              </div>
            }
          />
        </SelectTrigger>
        <SelectContent className="border-gray-100 shadow-zinc-100">
          <SelectGroup className="max-h-[320px]">
            {agents?.map(item => (
              <SelectItem value={item.name} key={item.id} className="relative">
                <Avatar className="absolute top-1/2 h-6 w-6 -translate-y-1/2">
                  <AvatarImage
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  />
                  <AvatarFallback className="uppercase">
                    {item.name.slice(1, 2)}
                  </AvatarFallback>
                </Avatar>
                <SelectLabel className="max-w-[300px] truncate font-semibold">
                  {item.name}
                </SelectLabel>
              </SelectItem>
            ))}
            {loading && (
              <SelectLabel className="h-10 text-center">Carregando...</SelectLabel>
            )}
            <div ref={ref} />
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        disabled={agent === ''}
        className="self-end bg-blue-800 font-semibold hover:bg-blue-600"
      >
        Entrar
      </Button>
    </form>
  )
}
