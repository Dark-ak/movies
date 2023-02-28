import axios from "axios";

const baseUrl = "https://api.tvmaze.com/search/shows?q=all"

const getAll = () => {
    const request = axios.get(`${baseUrl}`);
    return request.then(response => response.data)
}

export default {getAll}