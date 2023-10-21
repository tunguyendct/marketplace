import API from '../constants/api'
import { STATUS } from '../constants/response'
import { ThemesResponse } from '../types/theme.type'

const listThemes = async (): Promise<ThemesResponse> => {
  const res = await fetch(`${API.URL}/themes`)
  const result = await res.json()

  if (result.status === STATUS.SUCCESS) {
    return result
  }
  throw new Error('Fail to fetch product themes')
}

export { listThemes }
