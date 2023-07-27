import axios, { AxiosHeaders, AxiosInstance, AxiosResponse } from 'axios'
import { coreConstants as c } from '..'
import CryptoJS from 'crypto-js'

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

const ts = new Date().getTime().toString()
const hash = CryptoJS.MD5(ts + c.privateKey + c.publicKey).toString()

class Service {
  private api: AxiosInstance

  constructor(private readonly baseURL: string = c.baseApi) {
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
        params: {
          ts,
          apikey: c.publicKey as string,
          hash,
          ...params
        },
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
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
export const service = new Service()
