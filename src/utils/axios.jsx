import axios from "axios";
const apiKey = import.meta.env.VITE_APIKEY;
const apiEP = `http://www.omdbapi.com/?apikey=${apiKey}&`

export const fetchFromAPI = async (str) => {
    try {
        const url = apiEP + "t=" + str
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}