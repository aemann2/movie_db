const nowShowing = `movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&region=US`;

const comingSoon = `movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&region=US`;

const searchURL = `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&region=US&year&primary_release_year`;

const endpoints = {
	nowShowing,
	comingSoon,
	searchURL
};

export default endpoints;