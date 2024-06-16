import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import type { MaybeRef } from 'vue'
import { useGet } from '~/composables/api'
import type { Asset, Company, Location } from '~/models/Companies'

interface State {
  company: MaybeRef,
  companies: Company[],
  locations: Location[],
  assets: Asset[],
}

export const useCompany = defineStore('company', {
  state: (): State => ({
    company: useLocalStorage('tractian-selected-company', ''),
    companies: [],
    locations: [],
    assets: [],
  }),
  actions: {
    getCompanies() {
      return useGet(
        'companies',
        this.setCompanies(),
        false,
      )
    },
    setCompanies() {
      return (response: Company[]) => {
        if (response) {
          this.$state.companies = response
        }

        return response
      }
    },
    setCompany(company: string) {
      if (!company) {
        return
      }

      this.$state.company = company
    }
  }
})