import { redirect } from 'next/navigation'

export default function ProfileRedirect() {
  return redirect('/select-agent')
}
