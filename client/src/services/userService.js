import axios from 'axios'
import config from '../config'

export async function login(email, password, role) {
    // body parameters
    const body = {
      email,
      password,
    }

    // make API call
    const response = await axios.post(`${config.url}/${role}`, body)
  
    // read JSON data (response)
    return response
  }
  