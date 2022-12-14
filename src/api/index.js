import axios from "axios";

const apiProducts = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    headers: {
        "Content-type": "application/json"
    }
});

const apiAvaliation = axios.create({
    baseURL: "http://localhost:8081/ap/v1/",
    headers: {
        "Content-type": "application/json"
    }
});

const apiSupermaket = axios.create({
    baseURL: "http://localhost:8082/api/v1",
    headers: {
        "Content-type": "application/json"
    }
});
export {apiAvaliation, apiProducts, apiSupermaket};