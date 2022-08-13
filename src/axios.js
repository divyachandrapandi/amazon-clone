import axios from "axios";


const instance = axios.create({
    baseURL :"http://localhost:5001/challenge-37115/us-central1/api"  //api (cloud function) url
});

export default instance;