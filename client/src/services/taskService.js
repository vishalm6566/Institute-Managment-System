import axios from 'axios'
import config from '../config'

export async function registerTask({ teacherId, description, dueDate }) {
    // body parameters
    const body = {
        teacherId, 
        description,
        dueDate
    }

    // make API call
    const response = await axios.post(`${config.url}/task/register`, body)

    // read JSON data (response)
    return response
}

export async function getAllTasks() {

    const response = await axios.get(`${config.url}/task`)

    // read JSON data (response)
    return response
}


export async function getTaskByTeacherId(teacherId) {

    const body = {
        teacherId
    }

    const response = await axios.post(`${config.url}/task/teacher`, body)

    // read JSON data (response)
    return response
}



export async function updateTaskStatus(taskId) {

    const response = await axios.patch(`${config.url}/task/${taskId}`)

    // read JSON data (response)
    return response
}
