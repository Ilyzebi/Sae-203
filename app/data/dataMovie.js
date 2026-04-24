let HOST_URL = "https://mmi.unilim.fr/~leprevost2/Sae-203";

let DataMovie = {};

DataMovie.requestMovies = async function(){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies");
    let data = await answer.json();
    return data;
}

export {DataMovie};
