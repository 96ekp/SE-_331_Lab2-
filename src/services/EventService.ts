//
import type { EventItem } from '@/type'
import type { AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  getEvent(perPage: number, page: number): Promise<AxiosResponse<EventItem[]>> {
    return apiClient.get<EventItem[]>('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEventById(id: number): Promise<AxiosResponse<EventItem>> {
    return apiClient.get<EventItem>('events/' + id.toString())
  }
}
