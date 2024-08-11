import axios from 'axios'
import config from '../config'

export async function registerTeacher(body) {
    // body parameters

    // make API call
    const response = await axios.post(`${config.url}/teacher/register`, body)

    return body
}

export async function getAllTeachers() {

    const response = await axios.get(`${config.url}/teacher`)

    // read JSON data (response)
    return response
}

