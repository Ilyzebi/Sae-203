let templateFile = await fetch("./component/Hero/template.html");
let template = await templateFile.text();

let Hero = {};

Hero.format = function(movie, imageBaseUrl) {
    if (!movie) return "";
    let html = template;
    html = html.replaceAll('{{id}}', movie.id);
    html = html.replaceAll('{{name}}', movie.name);
    html = html.replaceAll('{{description}}', movie.description);
    html = html.replaceAll('{{year}}', movie.year);
    html = html.replaceAll('{{min_age}}', movie.min_age);
    html = html.replaceAll('{{category}}', movie.category_name ?? '');
    html = html.replaceAll('{{imageUrl}}', imageBaseUrl + movie.image);
    return html;
}

export { Hero };