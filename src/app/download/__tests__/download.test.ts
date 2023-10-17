import axios from "@/axiosConfig";
import { expect, describe, it } from "@jest/globals";

const endpoint = "http://localhost:3000/download"

describe('Download handler', () => {

    it('should return a 400 if no url is provided', async() => {
        const res = await axios.post(endpoint, {}, { responseType: 'blob' })
        expect(res.status).toBe(400);
    }, 30000)

    it('should return a 400 if url is not a youtube url', async() => {
        const url = "https://example.com"
        const res = await axios.post(endpoint, { url }, { responseType: 'blob' })
        expect(res.status).toBe(400);
    }, 30000)

    it('should return a 400 if video is too long', async() => {
        const url = "https://www.youtube.com/watch?v=p77-glF--GA&t=5306s"
        const res = await axios.post(endpoint, { url }, { responseType: 'blob' })
        expect(res.status).toBe(400);
    }, 30000)

    it('should return a 500 if there is an error downloading the audio', async() => {
        const url = "https://www.youtube.com/watch?v=invalid"
        const res = await axios.post(endpoint, { url }, { responseType: 'blob' })
        expect(res.status).toBe(500);
    }, 30000)

    it('should return the audio file if everything is successful', async() => {
        const url = "https://www.youtube.com/watch?v=jJzw1h5CR-I"
        const res = await axios.post(endpoint, { url }, { responseType: 'blob' })
        expect(res.status).toBe(200);
    }, 30000)
})