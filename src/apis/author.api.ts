import API from '../constants/api'
import { STATUS } from '../constants/response'
import { AuthorsResponse } from '../types/author.type'

const listAuthors = async (): Promise<AuthorsResponse> => {
  const res = await fetch(`${API.URL}/authors`)
  const result = await res.json()

  if (result.status === STATUS.SUCCESS) {
    return result
  }
  throw new Error('Fail to fetch product authors')
}

export { listAuthors }
