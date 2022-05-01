import axios from "axios";


const testVariabel = () => "woy"
const config = {
    headers: {
        'Content-type': 'application/json',
    }
}
const root_api = axios.create({
    baseURL: "https://quotes.rest/",
    ...config
})
