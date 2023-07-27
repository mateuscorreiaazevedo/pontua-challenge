import { NextResponse } from 'next/server'

export async function POST() {
  const token = 'dsadaeidaemdkedoadmedmadsdmaekmoka'

  const expiresTokenInSeconds = 60 * 60 * 24 * 30 // 30 days

  return NextResponse.json('Bem-vindo', {
    headers: {
      'Set-Cookie': `pontua.token=${token}; Path=/; max-age=${expiresTokenInSeconds}`
    }
  })
}
