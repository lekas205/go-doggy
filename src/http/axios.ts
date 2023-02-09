import axios, { AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://dog.ceo/api',
  headers: {
    'Content-type': 'application/json',
  },
})

export default apiClient