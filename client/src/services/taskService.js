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
    console.log(response)
    return response
}

export async function getAllTasks() {

    const response = await axios.get(`${config.url}/task`)

    // read JSON data (response)
    console.log(response)
    return response
}

