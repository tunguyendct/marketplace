import { Status } from './response.type'

export type ThemesResponse = {
  status: Status
  data: {
    total: number
    themes: Theme[]
  }
}

export type Theme = {
  id: string
  name: string
}
