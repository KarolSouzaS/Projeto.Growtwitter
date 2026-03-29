import axios, { type InternalAxiosRequestConfig } from 'axios'
import type { Store } from '@reduxjs/toolkit'
import { logout } from '../store/slices/authSlice'
import type { RootState } from '../store'

// 🔹 URL base
const API_BASE_URL = ''

const api = axios.create({
  baseURL: API_BASE_URL,
})


let storeRef: Store

export const setupAxiosInterceptors = (store: Store) => {
  storeRef = store
}

// 🔹 REQUEST
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const state = storeRef.getState() as RootState

    const token = state.auth?.token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error),
)

// 🔹 RESPONSE
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Sessão expirada. Logout automático.')

      storeRef.dispatch(logout())
    }

    return Promise.reject(error)
  },
)

export default api