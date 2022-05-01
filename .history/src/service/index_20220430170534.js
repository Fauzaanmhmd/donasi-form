import axios from "axios";

const root_api = axios.create({
    baseURL: "https://quotes.rest/",
    ...config
})

const config = {
    headers: {
        'Content-type': 'application/json',
    }
}

export default root_api