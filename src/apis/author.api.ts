import API from '../constants/api'
import { AuthorsResponse } from '../types/author.type'

const listAuthors = async (): Promise<AuthorsResponse> => {
  const res = await fetch(`${API.URL}/authors`)
  return res.json()
}

export { listAuthors }
