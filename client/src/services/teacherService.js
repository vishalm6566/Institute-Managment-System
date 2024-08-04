import axios from 'axios'
import config from '../config'

export async function registerTeacher({ name, email, password }) {
    // body parameters
    const body = {
        name,
        email,
        password,
    }

    // make API call
    const response = await axios.post(`${config.url}/teacher/register`, body)

    // read JSON data (response)
    console.log(response)
    return response
}

export async function getAllTeachers() {

    const response = await axios.get(`${config.url}/teacher`)

    // read JSON data (response)
    console.log(response)
    return response
}

