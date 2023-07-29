import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { email } = body as RecoverPasswordProps

  if (!email.length) {
    return NextResponse.json('Endereço de email obrigatório.', {
      status: 422
    })
  }

  return NextResponse.json('Um link foi enviado para seu e-mail.', {
    status: 200
  })
}
