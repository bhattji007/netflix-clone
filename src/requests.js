const API_KEY="3220c6c5b34c29e00323a1ece5179225";
const Base="https://api.themoviedb.org/3/";

const requests={
    fetchTrending:`${Base}trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrignals:`${Base}discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`${Base}movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`${Base}discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`${Base}discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`${Base}discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchAnimatedMovies:`${Base}discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchFamilyMovies:`${Base}discover/movie?api_key=${API_KEY}&with_genres=10751`,
}
 export default requests;