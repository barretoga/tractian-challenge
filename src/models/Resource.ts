import type { MaybeRefOrGetter, UseFetchReturn } from '@vueuse/core'

export interface PaginateLink {
  prev: string
  next: string
  first: string
  last: string
}

export interface Resource<T = any> {
  data: T
}

export interface ResourcePaginate<T = any> extends Resource<T> {
  meta: {
    current_page: number
    from: number
    last_page: number
    links: PaginateLink
    path: string
    per_page: number
    to: number
    total: number
  }
  links: PaginateLink
}

export interface FetchPaginate {
  (url: MaybeRefOrGetter<string>): void
  get: (query: any) => ReturnPaginate
}

export interface ReturnPaginate {
  json: <T = any>() => UseFetchReturn<ResourcePaginate<T[]>>
}
