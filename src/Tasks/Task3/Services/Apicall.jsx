import Axios from 'axios';

const BASE_API_URL = 'http://localhost:3001';

const Apicall = Axios.create({
  baseURL: BASE_API_URL,
})

export default Apicall;