import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const redirectUrl = new URL('/login', req.nextUrl)

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': 'pontua.token=; Path=/; max-age=0'
    }
  })
}
