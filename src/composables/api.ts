import { useToast } from 'vue-toastification'
import { useAxios } from '@vueuse/integrations/useAxios'
import type { UrlParams } from '@vueuse/core'
import { http } from '~/composables/http'

const toast = useToast()

const axiosOptions = function (
  showToast: boolean,
  callback?: (response: any) => void,
) {
  return {
    immediate: false,
    onSuccess: (res: any) => {
      callback?.(res)
      if (showToast) {
        toast.success(
          res?.data?.message
            ? res.data.message
            : 'Operação concluída com sucesso',
        )
      }
    },
    onError(e: any) {
      toast.error(
        e.response?.data.message
          ? e.response.data.message
          : 'Não foi possível concluir a operação',
      )
    },
  }
}

export function useGet(
  url: string,
  callback?: (response: any) => void,
  showToast = true,
) {
  const response = useAxios(
    url,
    { method: 'GET' },
    http,
    axiosOptions(showToast, callback),
  )

  function execute(params?: UrlParams) {
    response.execute({ params }).then()
  }

  return { ...response, execute }
}

export function usePost(
  url: string,
  callback?: (response: any) => void,
  showToast = true,
) {
  const response = useAxios(
    url,
    { method: 'POST' },
    http,
    axiosOptions(showToast, callback),
  )

  return { ...response }
}

export function usePut(
  url: string,
  callback?: (response: any) => void,
  showToast = true,
) {
  const response = useAxios(
    url,
    { method: 'PUT' },
    http,
    axiosOptions(showToast, callback),
  )

  return { ...response }
}

export function useDelete(
  url: string,
  callback?: (response: any) => void,
  showToast = true,
) {
  const response = useAxios(
    '',
    { method: 'DELETE' },
    http,
    axiosOptions(showToast, callback),
  )

  function execute(path?: string, data?: any) {
    if (!path && !data) {
      response.execute(url)
      return
    }
    response.execute(`${url}/${path}`, { data })
  }

  return { ...response, execute }
}

export function useAxiosRaw(url: string) {
  const response = useAxios(url, { method: 'GET' }, http, {
    immediate: false,
  })

  return { ...response }
}
