import { Status } from './response.type'

export type AuthorsResponse = {
  status: Status
  data: {
    total: number
    authors: Author[]
  }
}

export type Author = {
  id: string
  avatar: string
  verified: boolean
}
