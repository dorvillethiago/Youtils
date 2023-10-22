import axios from "@/axiosConfig";
import { expect, describe, it } from "@jest/globals";

const endpoint = "http://localhost:3000/download"

describe('Download handler', () => {

    it('should return a 400 if id is not a valid youtube video id', async() => {
        const id = "invalid"
        const res = await axios.get(`${endpoint}/${id}`, { responseType: 'blob' })
        expect(res.status).toBe(400);
    }, 30000)

    it('should return a 400 if video is too long', async() => {
        const id = "p77-glF--GA"
        const res = await axios.get(`${endpoint}/${id}`, { responseType: 'blob' })
        expect(res.status).toBe(400);
    }, 30000)

    it('should return the audio file if everything is successful', async() => {
        const id = "jJzw1h5CR-I"
        const res = await axios.get(`${endpoint}/${id}`, { responseType: 'blob' })
        expect(res.status).toBe(200);
    }, 30000)
})