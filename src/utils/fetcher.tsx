import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetcher = (url: string) =>
	axios.get(url).then((res) => res.data);
