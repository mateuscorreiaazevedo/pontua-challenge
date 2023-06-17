import axios, { AxiosHeaders, AxiosInstance, AxiosResponse } from 'axios'
import { env } from '@/main/config'

type HttpRequest = {
  url: string
  data?: any
  headers?: AxiosHeaders
  params?: any
  method?: 'get' | 'post' | 'put' | 'delete'
}

type HttpResponse<T> = {
  statusCode: number
  body?: T
}

export class Service {
  private api: AxiosInstance

  constructor(private readonly baseURL: string = env.baseUrl) {
    this.api = axios.create({
      baseURL: this.baseURL
    })
  }

  async request<T = any>(props: HttpRequest): Promise<HttpResponse<T>> {
    const { url, data, headers, method = 'get', params } = props
    let response: AxiosResponse

    try {
      response = await this.api.request({
        url,
        method,
        data,
        params,
        headers
      })
    } catch (error) {
      response = (error as any).response
    }

    return {
      statusCode: response.status,
      body: response.data
    }
  }
}
