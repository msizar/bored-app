import { IChip } from "@/models"
import axios from "axios"

const ACTIVITIES_ENDPOINT = "http://localhost:8000/activities"

const setupActivityTypes = () => {
  return axios.get(`${ACTIVITIES_ENDPOINT}/setup`).then((res) => res.data.map((item: IChip) => ({title: item, active: false })))
}

const getActivities = () => {
  return axios.get(ACTIVITIES_ENDPOINT).then(res => res.data)
}

export {getActivities, setupActivityTypes}