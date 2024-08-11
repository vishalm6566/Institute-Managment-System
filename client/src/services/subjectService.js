import axios from 'axios'
import config from '../config'

export async function getAllSubjects(courseId) {

    const response = await axios.get(`${config.url}/subject/${courseId}`)

    // read JSON data (response)
    return response
}

export async function getAllSubject() {

    const response = await axios.get(`${config.url}/subject`)

    // read JSON data (response)
    return response
}