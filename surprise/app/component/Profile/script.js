let templateFile = await fetch("./component/Profile/template.html");
let template = await templateFile.text();

let Profile = {};

Profile.format = function(profile, handler, imageBaseUrl = '../server/images/') {
    let html = template;
    html = html.replaceAll("{{name}}", profile.name);
    html = html.replaceAll("{{image}}", profile.image || "images/default-avatar.png");
    html = html.replaceAll("{{handler}}", handler + "(" + profile.id + ")");
    return html;
}

Profile.formatMany = function(profiles, imageBaseUrl = '../server/images/') {
    if (!profiles || profiles.length === 0) {
        return '<p class="profiles__empty">Aucun profil disponible.</p>';
    }
    let html = '<div class="profiles">';
    for (let profile of profiles) {
        html += Profile.format(profile, "C.handlerProfileSelect", imageBaseUrl);
    }
    html += '</div>';
    return html;
}

export { Profile };