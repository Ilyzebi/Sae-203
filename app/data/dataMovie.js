let HOST_URL = "https://mmi.unilim.fr/~leprevost2/Sae-203";

let DataMovie = {};

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

export {DataMovie};


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