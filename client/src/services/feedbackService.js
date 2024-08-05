import axios from 'axios'
import config from '../config'

export async function getAllFeedback(){

    const response = await axios.get(`${config.url}/feedback`)

    // read JSON data (response)
    console.log(response)
    return response
}

export async function getFeedbackByStudentId(studentid) {

    

    const response = await axios.get(`${config.url}/feedback/${studentid}`)

    // read JSON data (response)
    console.log(response)
    return response
}

export async function createFeedback(studentid,message) {

    const body = {
        message
    }

    const response = await axios.post(`${config.url}/feedback/${studentid}`, body)

    // read JSON data (response)
    console.log(response)
    return response
}
