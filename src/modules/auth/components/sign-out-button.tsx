'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/main/ui/button'
import axios from 'axios'
import React from 'react'

export const SignOutButton = () => {
  const router = useRouter()

  async function handleSignOut() {
    await axios.get('/api/logout')
    router.push('/login')
  }

  return (
    <Button onClick={handleSignOut} className="bg-blue-800 hover:bg-blue-600">
      Sair
    </Button>
  )
}
