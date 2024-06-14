import axios, { type InternalAxiosRequestConfig } from 'axios'
import { apiUrl } from '~/configs/env'

export const http = axios.create({
  baseURL: apiUrl,
})

http.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  if (!config.url) {
    return config
  }

  config.url = config.url.replace('http://', 'https://')

  return config
})

export function setAuth(token: string) {
  http.defaults.headers.common.Authorization = `Bearer ${token}`
}

export function deleteAuth() {
  delete http.defaults.headers.common.Authorization
}

export function setBaseUrl(newValue: string) {
  http.defaults.baseURL = newValue
}
