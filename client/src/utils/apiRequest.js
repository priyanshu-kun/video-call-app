import axios from "axios";

export const postRequest = async (url, payload = {}) => {
    try {
        const data = await axios.post(url, payload);
        return data;
    }
    catch (e) {
        return { error: e.response.data }
    }
}
export const getRequest = async (url) => {
    try {
        const data = await axios.get(url);
        return data;
    }
    catch (e) {
        return { error: e.response.data }
    }
}