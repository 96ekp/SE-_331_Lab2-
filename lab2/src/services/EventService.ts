// for TypeScript

// import axios from 'axios'
// import type { AxiosInstance, AxiosResponse } from 'axios'
// import type { EventItem } from '@/type'

// const apiClient: AxiosInstance = axios.create({
//   baseURL: 'http://localhost:3004',
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
// })

// export default {
//   getEvent(eventId: number): Promise<AxiosResponse<EventItem>> {
//     return apiClient.get<EventItem>`/events/${eventId}`
//   }
// }

//
import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { EventItem } from '@/type'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3004',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
/**
 * @typedef {import('axios').AxiosResponse} AxiosResponse
 * @typedef {import('@/type').EventItem} EventItem
 */
/**
 * Get an event by ID.
 * @param {number} eventId - The ID of the event to retrieve.
 * @returns {Promise<AxiosResponse<EventItem>>} A promise that resolves with the event data.
 */

export default {
  getEvent(eventId: number): Promise<AxiosResponse<EventItem>> {
    return apiClient.get<EventItem>`/events/${eventId}`
  }
}
