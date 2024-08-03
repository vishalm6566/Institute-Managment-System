import axios from 'axios'
import config from '../config'

export async function registerStudent({ name, email, password, courseId }) {
    // body parameters
    const body = {
        name,
        email,
        password,
        courseId
    }

    // make API call
    const response = await axios.post(`${config.url}/student/register`, body)

    // read JSON data (response)
    console.log(response)
    return response
}

export async function getAllStudents() {

    const response = await axios.get(`${config.url}/student`)

    // read JSON data (response)
    console.log(response)
    return response
}

