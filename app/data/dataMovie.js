let HOST_URL = "https://mmi.unilim.fr/~leprevost2/Sae-203";

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
        let answer = await fetch(HOST_URL + "/server/script.php?todo=readmoviesbycategory");
        if (!answer.ok) return [];
        return await answer.json();
    } catch (error) {
        console.error('Error fetching movies by category:', error);
        return [];
    }
};

export {DataMovie};