import axios from "axios";


const api = axios.create({
    baseURL: "https://product-backend-6sk0.onrender.com"
});

export default api;