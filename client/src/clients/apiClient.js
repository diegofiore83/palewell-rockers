import axios from 'axios';

const endpoint = 'http://localhost:5000/api';

export default class ApiClient {
    static async getPlayers() {
        const apiResponse = await axios.get(`${endpoint}/players`, {
            headers: { 'Content-Type': 'application/json' },
        });

        return apiResponse.data;
    }

    static async getNews() {
        const apiResponse = await axios.get(`${endpoint}/news`, {
            headers: { 'Content-Type': 'application/json' },
        });

        return apiResponse.data;
    }
}
