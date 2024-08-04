import axios from 'axios'
import config from '../config'

export async function getAllSubjects(courseId) {

    const response = await axios.get(`${config.url}/subject/${courseId}`)

    // read JSON data (response)
    console.log(response)
    return response
}