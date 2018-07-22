import axios from 'axios';
import { endpoints } from '../config/endpoints';

export class ApiClient {
    static async getPlayers() {
        const apiResponse = await axios.get(`${endpoints.api}/players`, {
            headers: { 'Content-Type': 'application/json' },
        });

        return apiResponse.data;
    }

    static async getNews() {
        const apiResponse = await axios.get(`${endpoints.api}/news`, {
            headers: { 'Content-Type': 'application/json' },
        });

        return apiResponse.data;
    }

    static async getMatchReports() {
        const apiResponse = await axios.get(`${endpoints.api}/reports`, {
            headers: { 'Content-Type': 'application/json' },
        });

        return apiResponse.data;
    }

    static async getFixtures() {
        const apiResponse = await axios.get(`${endpoints.api}/fixtures`, {
            headers: { 'Content-Type': 'application/json' },
        });

        return apiResponse.data;
    }
}
