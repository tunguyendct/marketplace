import API from '../constants/api'
import { ThemesResponse } from '../types/theme.type'

const listThemes = async (): Promise<ThemesResponse> => {
  const res = await fetch(`${API.URL}/themes`)
  return res.json()
}

export { listThemes }
