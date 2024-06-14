import { defineStore } from 'pinia'
import { useGet } from '~/composables/api'
import type { Asset, Company, Location } from '~/models/Companies'
import type { Resource } from '~/models/Resource'

interface State {
  companies: Company[],
  locations: Location[],
  assets: Asset[],
}

export const useCompany = defineStore('company', {
  state: (): State => ({
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
      return (response: Resource<Company[]>) => {
        const data = response.data

        if (data) {
          this.$state.companies = data
        }

        return response
      }
    }
  }
})