import axios from 'axios'
import config from '../config'

export async function getAllCourse() {

    const response = await axios.get(`${config.url}/course`)

    // read JSON data (response)
    console.log(response)
    return response
}


export async function getTaskByTeacherId(teacherId) {

    const body = {
        teacherId
    }

    const response = await axios.post(`${config.url}/task/teacher`, body)

    // read JSON data (response)
    console.log(response)
    return response
}



export async function updateTaskStatus(taskId) {

    const response = await axios.patch(`${config.url}/task/${taskId}`)

    // read JSON data (response)
    console.log(response)
    return response
}
