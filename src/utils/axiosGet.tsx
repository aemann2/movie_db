import axios from 'axios';
// importing this type from axios so I can define the return type
import { AxiosResponse } from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const axiosGet = (endpoint:string):Promise<AxiosResponse<object>> => {
  return axios.get(endpoint);
};

export default axiosGet;