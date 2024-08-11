import axios from 'axios'
import config from '../config'

export async function updateMarksByStdId({ marks, subjectId, studentId, courseId }) {
    // body parameters
    const body = {
        marks, 
        subjectId, 
        studentId, 
        courseId 
    }

    // make API call
    const response = await axios.patch(`${config.url}/mark`, body)

    // read JSON data (response)
    return response
}

export async function getAllMarksByStudentId(studentId) {

    const response = await axios.get(`${config.url}/mark/${studentId}`)

    // read JSON data (response)
    return response
}
