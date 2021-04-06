import Axios from 'axios';

export default Axios.create({
    baseURL : "https://newsapi.org/v2",
    params:{
        pageSize: 20,
        apiKey: "2722cb706b894395967aad5d43f0c1b1",
        country: "us",
    }
})

