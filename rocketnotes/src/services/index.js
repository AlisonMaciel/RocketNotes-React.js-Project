import axios from "axios"

export const api = axios.create({
    baseURL: "https://rocketnotes-api-project-1.onrender.com"
})
