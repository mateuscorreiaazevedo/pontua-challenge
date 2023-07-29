import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Carregando...'
}

export default function NotFound() {
  redirect('/')
}
