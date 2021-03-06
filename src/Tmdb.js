const API_KEY = "5f335b9bf9bf9948f11201782ea76a03";
const API_BASE = "https://api.themoviedb.org/3";

const basicFecth = async(endpoint) => {
    return (await fetch(`${API_BASE}${endpoint}`)).json();
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async() => {
        return [{
                slug: "originals",
                title: "Originais do Netflix",
                items: await basicFecth(
                    `/discover/tv/?with_network=245&language=pt-BR&api_key=${API_KEY}`
                    // /discover/tv?api_key=${API_KEY}
                    // &sort_by=popularity.desc&page=1
                    // &with_networks=213
                    // &with_watch_monetization_types=free
                ),
            },
            {
                slug: "trending",
                title: "Recomendados para Você",
                items: await basicFecth(
                    `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "toprated",
                title: "Em Alta",
                items: await basicFecth(
                    `/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicFecth(
                    `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicFecth(
                    `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicFecth(
                    `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFecth(
                    `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "documentary",
                title: "Documentários",
                items: await basicFecth(
                    `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
                ),
            },
        ];
    },

    getMovieInfo: async(movieId, type) => {
        let info = {};
        if (movieId) {
            switch (type) {
                case "movie":
                    info = await basicFecth(
                        `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
                    );
                    break;
                case "tv":
                    info = await basicFecth(
                        `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
                    );
                    break;
                default:
                    info = null;
                    break;
            }
        }

        return info;
    },
};