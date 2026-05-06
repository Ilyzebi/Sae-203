let HOST_URL = "..";

let DataProfile = {};

DataProfile.read = async function() {
    try {
        let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfiles");
        if (!answer.ok) return [];
        let data = await answer.json();
        return data;
    } catch (error) {
        console.error('Erreur:', error);
        return [];
    }
}

DataProfile.requestProfileById = async function(id) {
    try {
        let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfileById&id=" + id);
        if (!answer.ok) return null;
        let data = await answer.json();
        return data;
    } catch (error) {
        console.error('Erreur:', error);
        return null;
    }
}

export { DataProfile };