import Axios from 'axios'

const api = Axios.create({
    baseURL: `${process.env.API_JORNEY_URI}`,
});


export default api