import { NextRequest, NextResponse } from 'next/server'
import { usersConstants } from '@/modules/auth'
import jwt from 'jsonwebtoken'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { email, password } = body as LoginProps

  const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (!email.length) {
    return NextResponse.json('Endereço de e-mail obrigatório.', {
      status: 422
    })
  }
  if (!validateEmail.test(email)) {
    return NextResponse.json('Endereço de e-mail inválido.', {
      status: 422
    })
  }

  if (!password.length) {
    return NextResponse.json('Senha obrigatória.', {
      status: 422
    })
  }

  const verifyUser = usersConstants.find(item => item.email === email)

  if (!verifyUser) {
    return NextResponse.json('Usuário ou senha inválido.', {
      status: 422
    })
  }
  const verifyPassword = verifyUser.password === password
  const token = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: '30d' })

  if (!verifyPassword) {
    return NextResponse.json('Usuário ou senha inválida.', {
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
