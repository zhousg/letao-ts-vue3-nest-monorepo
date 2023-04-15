import type { AxiosError, Method } from 'axios'
import axios from 'axios'

type GetToken = () => string

export interface ResData<T = undefined> {
  code: number
  message: string
  data: T
}

type HandleError = (err: AxiosError<ResData>) => void

export function createAxiosRequest(
  baseURL: string,
  getToken?: GetToken,
  handleError?: HandleError
) {
  const instance = axios.create({
    baseURL,
    timeout: 100000,
  })

  instance.interceptors.request.use(
    (config) => {
      const token = getToken && getToken()
      if (token) config.headers.Authorization = `Bearer ${token}`
      return config
    },
    (err) => Promise.reject(err)
  )

  instance.interceptors.response.use(
    (res) => res.data,
    (err: AxiosError<ResData>) => {
      handleError && handleError(err)
      return Promise.reject(err)
    }
  )

  return function <T extends object>(
    url: string,
    method: Method = 'GET',
    payload?: object
  ) {
    return instance.request<never, ResData<T>>({
      url,
      method,
      [method.toUpperCase() === 'GET' ? 'params' : 'data']: payload,
    })
  }
}
