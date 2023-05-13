import axios from "axios"

const ACTIVITIES_ENDPOINT = "http://localhost:8000/activities"

const getActivities = () => {
  return axios.get(ACTIVITIES_ENDPOINT).then(res => res.data)
}

export {getActivities}