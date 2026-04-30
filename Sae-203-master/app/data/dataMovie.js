let HOST_URL = "..";

let DataMovie = {};


DataMovie.getHostUrl = function() {
    return HOST_URL;
}

DataMovie.requestMovies = async function(){
    try {
        let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies");
        if (!answer.ok) {
            console.error('HTTP error! status:', answer.status);
            return [];
        }
        let data = await answer.json();
        return data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
}



DataMovie.requestMovieDetails = async function(){
    try {
        let answer = await fetch(HOST_URL + "/server/script.php?todo=readmoviedetails");
        if (!answer.ok) {
            console.error('HTTP error! status:', answer.status);
            return [];
        }
        let data = await answer.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return [];
    }
}

DataMovie.requestMoviesByCategory = async function(){   // ← nouvelle fonction
    try {
        let [moviesRes, categoriesRes] = await Promise.all([
            fetch(HOST_URL + "/server/script.php?todo=readmovies"),
            fetch(HOST_URL + "/server/script.php?todo=readcategories")
        ]);
        let movies = await moviesRes.json();
        let categories = await categoriesRes.json();

        return categories.map(cat => ({
            category: cat.name,
            movies: movies.filter(m => m.id_category === cat.id)
        })).filter(cat => cat.movies.length > 0);
    } catch (error) {
        console.error('Error fetching movies by category:', error);
        return [];
    }
};

export {DataMovie};