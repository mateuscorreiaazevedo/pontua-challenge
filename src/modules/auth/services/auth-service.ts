import { service } from '@/modules/core'

class AuthService {
  async login({ email, password }: LoginProps) {
    const response = await service.request({
      url: '/login',
      method: 'post',
      data: {
        email,
        password
      }
    })

    switch (response.statusCode) {
      case 200:
        return response.body
      case 422:
        throw new Error(response.body)
      default:
        throw new Error('Falha no sistema. Por favor, tente novamente mais tarde.')
    }
  }

  async recoverPassword({ email }: RecoverPasswordProps) {
    const response = await service.request({
      url: '/recover',
      method: 'post',
      data: {
        email
      }
    })

    switch (response.statusCode) {
      case 200:
        return response.body
      default:
        throw new Error('Falha no sistema. Por favor, tente novamente mais tarde.')
    }
  }
}

export const authService = new AuthService()
