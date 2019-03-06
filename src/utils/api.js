import axios from 'axios'

export default axios.create({
  baseURL: 'http://5c7cd0f5dd19010014c8e92c.mockapi.io/api/v1',
  headers: {
    Authorization: `${localStorage.getItem('token')}`,
    'content-type': 'application/json',
  },
})
