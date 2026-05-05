let HOST_URL = "..";

let DataProfile = {};

DataProfile.read = async function() {
    try {
        let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfiles");
        if (!answer.ok) return { error: 'HTTP error: ' + answer.status };
        let data = await answer.json();
        return data;
    } catch (error) {
        console.error('Erreur:', error);
        return { error: error.message };
    }
}

export { DataProfile };