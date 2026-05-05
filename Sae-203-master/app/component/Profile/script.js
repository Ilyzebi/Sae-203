let templateFile = await fetch("./component/Profile/template.html");
let template = await templateFile.text();

let Profile = {};

Profile.format = function(profile, handler) {
    let html = template;
    html = html.replaceAll("{{name}}", profile.name);
    html = html.replaceAll("{{image}}", profile.image || "images/default-avatar.png");
    html = html.replaceAll("{{handler}}", handler + "(" + profile.id + ")");
    return html;
}

export { Profile };