import { request } from '../utils/request'

export function getDashboardEntryData() {
  return request('/mock/admin/statistics/entry')
}
