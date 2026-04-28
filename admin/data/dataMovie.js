let HOST_URL = "https://mmi.unilim.fr/~leprevost2/Sae-203";

let DataMovie = {};

DataMovie.add = async function(fdata){
    try {
        let config = {
            method: "POST",
            body: fdata
        };
        let answer = await fetch(HOST_URL + "/server/script.php?todo=addMovie", config);
        if (!answer.ok) {
            console.error('HTTP error! status:', answer.status);
            return {error: 'HTTP error status: ' + answer.status};
        }
        let data = await answer.json();
        return data;
    } catch (error) {
        console.error('Error adding movie:', error);
        return {error: error.message};
    }
}

export {DataMovie};
