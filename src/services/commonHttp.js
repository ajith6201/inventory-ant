import axios from "axios";

export default axios.create({
    //baseURL:'http://3.86.248.133/',
    baseURL:'http://localhost:8000/',
    headers:{
        "content-type" : "application/json"
    }
});