import axios from "axios";

const root_api = axios.create({
    baseURL: "https://quotes.rest/"
})

const config = {
    headers: {
        'Content-type': 'application/json',
    }
