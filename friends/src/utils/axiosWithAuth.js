import axios from 'axios'

export const api = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'http://localhost:5000',
        header: {
            'Authorization': token
        }
    })
}
