import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const users: LoginProps[] = [
  {
    email: 'admin@pontua.com.br',
    password: 'admin.Pontua123'
  },
  {
    email: 'user@email.com',
    password: 'Teste123.'
  }
]

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { email, password } = body as LoginProps

  if (!email.length) {
    return NextResponse.json('Endereço de email obrigatório.', {
      status: 422
    })
  }
  if (!password.length) {
    return NextResponse.json('Senha obrigatória.', {
      status: 422
    })
  }

  const verifyUser = users.find(item => item.email === email)

  if (!verifyUser) {
    return NextResponse.json('Endereço de email não cadastrado.', {
      status: 404
    })
  }
  const verifyPassword = verifyUser.password === password
  const token = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: '30d' })

  if (!verifyPassword) {
    return NextResponse.json('Senha inválida.', {
      status: 422
    })
  }

  const expiresTokenInSeconds = 60 * 60 * 24 * 30 // 30 days

  return NextResponse.json(`Bem-vindo ${email}`, {
    status: 200,
    headers: {
      'Set-Cookie': `pontua.token=${token}; Path=/; max-age=${expiresTokenInSeconds}`
    }
  })
}
